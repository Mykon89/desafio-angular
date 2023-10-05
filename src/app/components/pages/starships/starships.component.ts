import { Component } from '@angular/core';
import { ApiService } from './../../../../../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent {
  starships: any[] = [];
  currentPage = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getStarships(this.currentPage);
  }

  // Método para obter a lista inicial de naves Star Wars
  getStarships(page: number) {
    this.apiService
      .getStarships(page)
      .then((response) => {
        this.starships = response.results;
      })
      .catch((error: any) => {
        console.error('Erro ao buscar filmes:', error);
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.getStarships(this.currentPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getStarships(this.currentPage);
    }
  }
}
