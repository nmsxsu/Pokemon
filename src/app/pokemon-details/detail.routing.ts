import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details.component';

export const pokemonDetailsRoutes: Routes = [
  {
    path: ':nome',
    component: PokemonDetailsComponent,
  },
];

export const pokemonDetailsRouting =
  RouterModule.forChild(pokemonDetailsRoutes);
