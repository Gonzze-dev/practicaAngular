import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IUser } from '../Interface/IUser';
import { addPointsUrl, getHistoryUrl, getUserUrl, header, reedemUrl } from '../config';
import { catchError, finalize, throwError } from 'rxjs';
import { Suscription } from '../Type/Suscription';
import { IResponse } from '../Interface/IResponse';
import { IPointsResponse } from '../Interface/IPointsResponse';
import { ProductsService } from './products.service';
import { IProduct } from '../Interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)
  productService = inject(ProductsService)
  
  protected userInit = {
    id: '',
    name: '',
    points: 0,
    redeemHistory: [],
    createDate: new Date()
  }

  protected initPointsResponse:IPointsResponse = {
    message: '',
    "New Points": 0
  }

  user = signal<IResponse<IUser>>({
    status: 200,
    isLoading: true,
    error: '',
    data: structuredClone(this.userInit)
  })

  points = signal<IResponse<IPointsResponse>>({
    status: 200,
    isLoading: true,
    error: '',
    data: structuredClone(this.initPointsResponse)
  })

  reedem = signal<IResponse<string>>({
    status: 200,
    isLoading: true,
    error: '',
    data: ''
  })

  history = signal<IResponse<IProduct[]>>({
    status: 200,
    isLoading: true,
    error: '',
    data: []
  })

  constructor() {
    if (this.user().data.id.length === 0)
      this.get()
  }

  get(){
    let status = 200
    let data = structuredClone(this.userInit)
    let error = ''

    const configSub: Suscription = {
      next(res: any) {
        data = res
      },
      error(e) {
        status = 400
        error = e
      }
    }
    
    const configFinalize = () => {
      const newRes: IResponse<IUser> = {
        status: status,
        error: error,
        isLoading: false,
        data: data
      }

      this.user.set(newRes)
    }

    this.http.get(getUserUrl, {headers: header})
    .pipe(
      finalize(configFinalize)
    )
    .subscribe(configSub)
  }

  getHistory()
  {
    let data:IProduct[] = []
    let status = 200
    let error = ""
    
    const configSub: Suscription = {
      next(res: any) {
        data = res
      },
      error(e) {
        status = 400
        error = e
      }
    }

    const configFinalize = () => {
      const newRes: IResponse<IProduct[]> = {
        status: status,
        isLoading: false,
        error: error,
        data:  data
      }
      
      this.history.set(newRes)
    }

    this.http.get<IProduct[]>(getHistoryUrl, {headers: header})
    .pipe(
      catchError((e) => 
        {
          const errorMessage = `ocurrio un error ${e}`
          return throwError(() => new Error(errorMessage))
        },
      ),
      finalize(configFinalize)
    )
    .subscribe(configSub)
  }

  addPoints()
  {
    const amount = 1000

    if (this.user().data.points >= 25000) return ;

    let status = 200
    let error = ''
    let data = structuredClone(this.initPointsResponse)

    const configSub: Suscription = {
      next(res: any) {
        data = res
      },
      error(e) {
        status = 400
        error = e
      }
    }
    
    const configFinalize = () => {
      const newRes: IResponse<IPointsResponse> = {
        status: status,
        error: error,
        isLoading: false,
        data: data
      }

      this.points.set(newRes)
      console.log(newRes)
      this.user.update((res) => ({
        ...res,
        data: {
          ...res.data,
          points: data['New Points']
        }
      }))
    }

    this.http.post(addPointsUrl, {amount: amount}, { headers: header})
    .pipe(
      finalize(configFinalize)
    )
    .subscribe(configSub)
  
  }

  reedemPoints(productId: string){
    let userPoints = this.user().data.points
    const productCost = this.productService.getCost(productId)

    if (productCost === 0) return ;

    if (userPoints < productCost) return;
    else 
      userPoints = userPoints - productCost

    let status = 200
    let error = ''
    let data = ''

    const configSub: Suscription = {
      next(res: any) {
        data = res.message
      },
      error(e) {
        status = 400
        error = e
      }
    }
    
    const configFinalize = () => {
      const newRes: IResponse<string> = {
        status: status,
        error: error,
        isLoading: false,
        data: data
      }

      this.reedem.set(newRes)
      this.user.update((user) => ({
        ...user,
        data: {
          ...user.data,
          points: userPoints
        }
      }))
    }

    this.http.post(reedemUrl, {productId: productId}, { headers: header})
    .pipe(
      finalize(configFinalize)
    )
    .subscribe(configSub)
  }
}
