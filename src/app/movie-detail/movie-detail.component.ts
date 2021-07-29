import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie?: Movie;
    
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location

  ) { }

  ngOnInit(): void {
  
}
}


