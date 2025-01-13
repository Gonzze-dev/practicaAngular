import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { IResponce } from '../Interface/IResponse';
import { IRickAndMorty } from '../Interface/IRickAndMorty';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private url = 'https://rickandmortyapi.com/api/character'
  
  status = signal<IResponce>({
    status: "200",
    error: "",
    isLoading: true
  })

  private http = inject(HttpClient)

  getCharacters(){
    let error = ""
    let data: IRickAndMorty[] = []
    let status = "200"

    
    
    this.http
    .get(this.url)
    .pipe(
      catchError((e) => 
        {
          const errorMessage = `ocurrio un error ${e}`
          return throwError(() => new Error(errorMessage))
        }
      ),
      finalize(() =>{
        this.status.update((actualStatus) => (
          {
            ...actualStatus,
            status: status,
            error: error,
            data: data,
            isLoading: false
          }
        ))
      })
    )
    .subscribe(
      {
        next: (response: any) => {
          data = response.results
        },
        error: (e: string) => {
          status = "400"
          error = e
        }
      }
    )
  }
}
