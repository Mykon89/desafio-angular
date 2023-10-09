import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../details/details.component';
import { ApiService } from './../../../../../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent {
  starships: any[] = [];
  detailStarship: any[] = [];
  currentPage = 1;
  count = 0;
  totalPages = 0;
  countPages = 0;

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getStarships(this.currentPage);
  }

  // Método para obter a lista inicial de naves Star Wars
  getStarships(page: number) {
    this.apiService
      .getStarships(page)
      .then((response) => {
        this.starships = response.results;
        this.count = response.count;
        this.totalPages = this.count / 10;
        this.countPages = Math.ceil(this.totalPages);
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

  // Método para mais detalhes das naves.
  getDetails(id: string) {
    this.apiService
      .getDetails(id)
      .then((response) => {
        this.detailStarship = response;
        this.openDetails();
      })
      .catch((error: any) => {
        console.error('Erro ao buscar naves:', error);
      });
  }

  // Método para abrir o dialog do Angular Material
  openDetails(): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: this.detailStarship,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
