import { Movie, MovieV2, PagedResults } from '../movie';
import { MovieService } from '../movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  public movies!: MovieV2[];

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovieDetails().subscribe(
      (pagedResults: PagedResults) => {
        // Note: Given we have paged results, do we want to go and get the next page, and the page after that etc?
        // OR: do we want to have a button at the bottom that gets the next page etc?
        console.log(pagedResults.results);
        this.movies = pagedResults.results;
      });
  }
  
}


