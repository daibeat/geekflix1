import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  
  selectedMovie?: Movie;

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
onSelect(movie: Movie): void {
  this.selectedMovie = movie;
}
getMovies(): void {
  this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
}

}
