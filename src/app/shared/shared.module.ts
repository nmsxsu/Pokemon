import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const components: any[] = [HeaderComponent];
const moduls: any[] = [
  HttpClientModule,
  CommonModule,
  NgbModule,
  FormsModule,
  RouterModule,
];
@NgModule({
  declarations: [...components],

  imports: [...moduls],
  exports: [...components, ...moduls],
})
export class sharedModule {}
