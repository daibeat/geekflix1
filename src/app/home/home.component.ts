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
  
  movies: any;


  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    ) { }

  
    ngOnInit() :void   {
      this.getMovies();
    }

 
   
      getMovies() :void {
        this.movieService.getMovieDetails()
        .subscribe(movies => {
          console.log(movies);

          //TODO fix the results
          //  this.movies = movies ['results'];
        });
      }
  }

  
