import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDisplayComponent } from './components/movies-display/movie-display.component';


const routes: Routes = [
  {
    path: '',
    component: MovieDisplayComponent
  },
  {
    path: 'movies',
    redirectTo: ''
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
