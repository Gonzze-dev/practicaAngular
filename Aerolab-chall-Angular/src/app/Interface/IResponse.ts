export interface IResponse<T> {
    status?: number
    error?: string
    isLoading: boolean
    data: T
}