export interface IPaginatedData<T> {
    pageSize: number
    currentPage: number
    next: number
    prev: number
    countItems?: number
    data:  T
}