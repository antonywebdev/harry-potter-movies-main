import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input("movie") movie: Movie | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToDetails(movieId?: number) {
    if(movieId){
      this.router.navigate(['/movies', movieId]);
    }
  }

}



