import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { sharedModule } from '../shared/shared.module';
import { notFoundRouting } from './not-found.routing';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [sharedModule, notFoundRouting],
})
export class NotFoundModule {}
