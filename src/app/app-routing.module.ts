import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'house',
    loadChildren: () =>
      import('./modules/house-request/house-request.module').then(
        (m) => m.HouseRequestModule
      ),
  },
  {
    path: '',
    redirectTo: 'house',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
