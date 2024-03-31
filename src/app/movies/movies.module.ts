import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovielistingComponent } from './components/movie-list/movielisting.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MovieDisplayComponent } from './components/movies-display/movie-display.component';
import { BudgetPipe } from '../shared/pipes/budget.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';

@NgModule({
    declarations: [MovielistingComponent, MovieDetailsComponent, MovieDisplayComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }
