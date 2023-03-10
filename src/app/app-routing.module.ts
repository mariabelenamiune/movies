import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '@movies/components/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// eslint-disable-next-line prettier/prettier
export class AppRoutingModule { }
