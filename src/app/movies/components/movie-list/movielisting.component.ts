import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.css']
})
export class MovielistingComponent implements OnInit {
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



