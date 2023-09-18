import { Component } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IPokemonDetails, PokemonDetails } from '../models/details.models';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  pokemon?: IPokemonDetails;
  nome: string = '';
  loading: boolean = true;

  constructor(private service: PokemonService, private router: ActivatedRoute) {
    this.router.params.subscribe((p: Params) => {
      this.nome = <string>p['nome'];
      this.getPokemon(this.nome);
    });
  }

  getPokemon(nome: string) {
    this.loading = true;
    this.service.getPokemon(nome).subscribe((res: IPokemonDetails) => {
      this.pokemon = res;
      this.loading = false;
    });
  }
}
