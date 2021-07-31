import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  albums:any = [];


  constructor(private movieService: MovieService) { }

 
    ngOnInit() {
      this.albums = this.movieService.getMovies();
    }

  }
