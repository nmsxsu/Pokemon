import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { sharedModule } from '../shared/shared.module';
import { pokemonListRouting } from './list.routing';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [sharedModule, pokemonListRouting],
})
export class PokemonListModule {}
