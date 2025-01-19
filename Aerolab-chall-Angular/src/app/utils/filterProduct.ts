import { IProduct } from "../Interface/IProduct";

export const filterProduct = {
    mostrecent: (products: IProduct[]) => products.sort((a:IProduct, b:IProduct) => b._id > a._id ? -1 : 1),
    highestprice: (products: IProduct[]) => products.sort((a:IProduct, b:IProduct) => b.cost - a.cost),
    lowestprice: (products: IProduct[]) => products.sort((a:IProduct, b:IProduct) => a.cost - b.cost),
}