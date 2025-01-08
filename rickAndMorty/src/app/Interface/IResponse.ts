import { IRickAndMorty } from "./IRickAndMorty"

export interface IResponce {
    status?: string
    error?: string
    data?: IRickAndMorty[]
    isLoading: boolean
}