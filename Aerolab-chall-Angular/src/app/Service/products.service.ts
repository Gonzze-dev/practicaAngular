import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, linkedSignal, signal } from '@angular/core';
import { getProductsUrl, header, token } from '../config';
import { catchError, finalize, pipe, throwError } from 'rxjs';
import { IProduct } from '../Interface/IProduct';
import { Suscription } from '../Type/Suscription';
import { IResponse } from '../Interface/IResponse';
import { IPaginatedData } from '../Interface/IPaginatedData';
import { paginateData } from '../utils/paginateData';
import { filterProduct } from '../utils/filterProduct';
import { Filter } from '../Type/Filter';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  public globalProducts = signal<IResponse<IProduct[]>>({
    status: 200,
    isLoading: true,
    error: '',
    data: []
  })

  public filter: Filter = 'mostrecent'

  public response = linkedSignal<IResponse<IPaginatedData<IProduct[]>>>(() => {
    const resGlobalProduct = structuredClone(this.globalProducts())

    const newRes: IResponse<IPaginatedData<IProduct[]>> = {
      ...resGlobalProduct,
      data: {
        pageSize: 10,
        currentPage: 1,
        next: 2,
        prev: 0,
        data: resGlobalProduct.data
      }
    }

    let pagData = paginateData(newRes.data, resGlobalProduct.data)
    
    newRes.data = pagData
    newRes.data.data = this.filterBy({pageProduct: pagData})

    return newRes
  })
  
  http = inject(HttpClient)

  constructor() {
    if(this.globalProducts().data.length === 0)
      this.get()
  }

  get()
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
      const newRes: IResponse<IProduct[]> = (
        {
          status: status,
          error: error,
          isLoading: false,
          data: data
        }
      )

      this.globalProducts.set(newRes)
    }

    this.http.get<IProduct[]>(getProductsUrl, {headers: header})
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

 
  filterBy({ pageProduct = this.response().data, option = this.filter}: { pageProduct?: IPaginatedData<IProduct[]>; option?: Filter } = {})
  {
      if (option !== this.filter)
        this.filter = (option)

      let products = [...pageProduct.data]

      filterProduct[option](products)
      
      pageProduct.data = products

      return pageProduct.data
  }

  nextPage()
  {

    let products = [...this.globalProducts().data]
    let pagProducts = this.response().data
    
    pagProducts.currentPage = pagProducts.next

    pagProducts = paginateData(pagProducts, products)

    pagProducts.data = this.filterBy({pageProduct: pagProducts})

    this.response.update((res) => ({
      ...res,
      data: pagProducts
    }))
  }

  prevPage()
  {
    let products = [...this.globalProducts().data]
    let pagProducts = structuredClone(this.response().data)
    
    pagProducts.currentPage = pagProducts.prev

    pagProducts = paginateData(pagProducts, products)

    pagProducts.data = this.filterBy({pageProduct: pagProducts})

    this.response.update((res) => ({
      ...res,
      data: pagProducts
    }))
  }

  getCost(productId: string)
  {
    const product = this.response().data.data.find((product) => product._id == productId)
    const cost = product ? product.cost : 0
    return cost
  }
}
