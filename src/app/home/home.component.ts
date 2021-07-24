import { Component, OnInit } from '@angular/core';

import { Movie } from './home-movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {

 movies: Movie[] = [
   new Movie ( 'A test movie', 'This is movie description', 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg')
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
