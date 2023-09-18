import { NgModule } from '@angular/core';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { sharedModule } from '../shared/shared.module';
import { pokemonDetailsRouting } from './detail.routing';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [sharedModule, pokemonDetailsRouting],
})
export class PokemonDetailsModule {}
