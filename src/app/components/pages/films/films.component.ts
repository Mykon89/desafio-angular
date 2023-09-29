import { ApiService } from './../../../../../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {
  films: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.apiService
      .getFilms()
      .then((response) => {
        this.films = response.results;
      })
      .catch((error: any) => {
        console.error('Erro ao buscar filmes:', error);
      });
  }
}
