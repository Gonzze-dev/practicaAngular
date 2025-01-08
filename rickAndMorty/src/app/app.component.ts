import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickAndMortyService } from './service/rick-and-morty.service';
import { IResponce } from './Interface/IResponse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  rickAndMortyService = inject(RickAndMortyService)

  arr = computed<IResponce>(() => this.rickAndMortyService.status())

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters()
  }

  
}
