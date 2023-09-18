import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const notFoundRoutes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

export const notFoundRouting = RouterModule.forChild(notFoundRoutes);
