import { Component } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { HttpResponse, Pokemon } from '../models/httpResponse.models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { offset } from '@popperjs/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  elencoPokemon?: HttpResponse;
  pokemon?: Pokemon[];
  page = 1;
  collectionSize: any;
  loading: boolean = true;
  pageSize: number = 15;
  offset!: number;

  constructor(private pokemonService: PokemonService, private router: Router) {
    this.getElenco();
  }

  getElenco() {
    this.loading = true;
    this.offset = (this.page - 1) * this.pageSize;
    this.pokemonService.getElenco(this.offset, this.pageSize).subscribe(
      (res: HttpResponse) => {
        this.elencoPokemon = res;
        this.collectionSize = this.elencoPokemon?.count;
        this.refreshPokemon(this.page);
        this.loading = false;
      },
      (err: any) => {
        alert('Errore nella chiamata HTTP');
      }
    );
  }

  refreshPokemon(page: number) {
    const offset = (page - 1) * this.pageSize;
    this.pokemon = this.elencoPokemon?.results.slice(
      offset,
      offset + this.pageSize
    );
  }

  pageChange() {
    this.getElenco();
  }
  show(nome: string) {
    this.router.navigate(['pokemonDetails', nome]);
  }
}
