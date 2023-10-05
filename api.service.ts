import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://swapi.dev/api/'; // URL da API Star Wars

  constructor(private http: HttpClient) {}

  // Método para fazer uma requisição get dos Filmes de Star Wars
  getFilms(): Promise<any> {
    const endPoint = `${this.apiUrl}/films`;
    return this.http
      .get(endPoint)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  // Método para pesquisar filmes por nome
  getFilmsByName(name: string): Observable<any> {
    const endPoint = `${this.apiUrl}films/?search=${name}`;
    return this.http.get(endPoint);
  }

  // Método para fazer uma requisição get das Naves de Star Wars e paginação
  getStarships(page: number): Promise<any> {
    const endPoint = `${this.apiUrl}/starships/?page=${page}`;
    return this.http
      .get(endPoint)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
