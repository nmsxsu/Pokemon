import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPokemonDetails, PokemonDetails } from '../models/details.models';
import { IHttpResponse } from '../models/httpResponse.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getElenco(offset: number, limitElements: number): Observable<IHttpResponse> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limitElements}`;
    return this.http.get<any>(url);
  }
  getPokemon(nome: string): Observable<IPokemonDetails> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  }
}
