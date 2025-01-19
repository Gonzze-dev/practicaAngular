import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { getProductsUrl, header, token } from '../config';
import { catchError, finalize, throwError } from 'rxjs';
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

  private initPaginatedData = {
    pageSize: 0,
    currentPage: 1,
    next: 2,
    prev: 0,
    countItems: 0,
    data: []
  }
  private initResponse = {
    status: 200,
    isLoading: true,
    data: this.initPaginatedData
  }
  
  public response = signal<IResponse<IPaginatedData<IProduct[]>>>(structuredClone(this.initResponse))
  public globalProducts = signal<IProduct[]>([])
  public filter: Filter = 'mostrecent'

  http = inject(HttpClient)

  constructor() {
    if(this.globalProducts().length === 0)
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
      const newRes: IResponse<IPaginatedData<IProduct[]>> = {
        status: status,
        isLoading: false,
        error: error,
        data: {
          pageSize: 10,
          currentPage: 1,
          next: 2,
          prev: 0,
          data: [...data]
        }
      }

      this.globalProducts.set([...data])
      this.response.set(newRes)
      this.paginationProducts()
      this.filterBy()

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

  paginationProducts()
  {
    let products = [...this.globalProducts()]
    let pagData = paginateData(this.response().data, products)

    this.response.update(((res) => ({
      ...res,
      data: pagData
    })))
  }

  filterBy({ pageProduct = this.response().data, option = this.filter}: { pageProduct?: IPaginatedData<IProduct[]>; option?: Filter } = {})
  {
      if (option !== this.filter)
        this.filter = (option)

      let products = [...pageProduct.data]

      filterProduct[option](products)
      
      pageProduct.data = products

      this.response.update((res) => ({
        ...res,
        data: pageProduct
      }))
  }

  nextPage()
  {
    let products = this.globalProducts()
    let pagProducts = this.response().data

    pagProducts.currentPage = pagProducts.next

    pagProducts = paginateData(pagProducts, products)

    this.filterBy({pageProduct: pagProducts})
  }

  prevPage()
  {
    let products = this.globalProducts()
    let pagProducts = this.response().data

    pagProducts.currentPage = pagProducts.prev
    
    pagProducts = paginateData(pagProducts, products)

    this.filterBy({pageProduct: pagProducts})
  }

  getCost(productId: string)
  {
    const product = this.response().data.data.find((product) => product._id == productId)
    const cost = product ? product.cost : 0
    return cost
  }
}
