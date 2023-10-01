import { ApiService } from './../../../../../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {
  films: any[] = [];
  searchTerm: string = ''; // Termo de pesquisa inserido pelo usuário

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  // Método para obter a lista inicial de filmes Star Wars
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

  // Método para pesquisar filmes por nome
  searchFilms() {
    if (this.searchTerm.trim() === '') {
      // Se o campo de pesquisa estiver vazio, mostrar todos os filmes
      this.getFilms();
    } else {
      // Se houver um termo de pesquisa, chamar o método de pesquisa no ApiService
      this.apiService.getFilmsByName(this.searchTerm).subscribe(
        (response) => {
          this.films = response.results;
        },
        (error) => {
          console.error('Erro ao buscar filmes:', error);
        }
      );
    }
  }
}
