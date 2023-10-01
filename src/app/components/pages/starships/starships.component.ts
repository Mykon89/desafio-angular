import { Component } from '@angular/core';
import { ApiService } from './../../../../../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent {
  starships: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getStarships();
  }

  // Método para obter a lista inicial de naves Star Wars
  getStarships() {
    this.apiService
      .getStarships()
      .then((response) => {
        this.starships = response.results;
      })
      .catch((error: any) => {
        console.error('Erro ao buscar filmes:', error);
      });
  }
}
