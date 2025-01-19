export interface IPaginatedData<T> {
    totalPages?: number
    pageSize: number
    currentPage: number
    next: number
    prev: number
    countItems?: number
    data:  T
}