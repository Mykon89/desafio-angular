import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  // Método para fazer uma pesquisa pelo nome do filme
  getFilmsName(): Promise<any> {
    const endPoint = `${this.apiUrl}/films/?search=`;
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
