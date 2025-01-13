import { IPaginatedData } from "../Interface/IPaginatedData"

export function paginateData<T>( 
    paginatedData: IPaginatedData<T[]>,
    products: T[]
  ): IPaginatedData<T[]>
{ 
    const sizePage = paginatedData.pageSize
    const totalItems = products.length
    const totalPages = Math.ceil(totalItems / sizePage)
    let currentPage = paginatedData.currentPage
    let newData = [...products]

    if(currentPage < 1)
    {
        currentPage = 1
    }
    else if (currentPage > totalPages)
    {
        currentPage = totalPages
    }
    
    const start = (currentPage - 1) * sizePage
    let end = start + sizePage

    if(end > totalItems)
    {
        const surplus = end - totalItems
        end = end - surplus
    }

    newData = newData.slice(start, end)
    
    const next = currentPage+1 >= sizePage ? totalPages : currentPage+1
    const prev = currentPage-1 <= 0 ? 0 : currentPage-1

    paginatedData = {
        pageSize: sizePage,
        currentPage: currentPage,
        next: next,
        prev: prev,
        countItems: end,
        data: newData
    }

    return paginatedData

}