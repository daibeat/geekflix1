import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MOVIES } from '../mock.movies';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
 movies =  MOVIES;

 selectedMovie?: Movie;
onSelect(movie: Movie): void {
  this.selectedMovie = movie;
}
  constructor() { }

  ngOnInit(): void {
  }

}
