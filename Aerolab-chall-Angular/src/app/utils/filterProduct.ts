import { IProduct } from "../Interface/IProduct";

export const filterProduct = {
    mostrecent: (products: IProduct[]) => products.sort((a:IProduct, b:IProduct) => a.cost - b.cost),
    highestprice: (products: IProduct[]) => products.sort((a:IProduct, b:IProduct) => b.cost - a.cost),
    lowestprice: (products: IProduct[]) => products.sort((a:IProduct, b:IProduct) => a.cost - b.cost),
}