import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';

export const pokemonListRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

export const pokemonListRouting = RouterModule.forChild(pokemonListRoutes);
