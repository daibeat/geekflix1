import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  
  photos: any = [];
  almbumId : any = [];

  constructor(
    
    private movieService : MovieService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.almbumId = this.route.snapshot.params.albumId;
    this.photos = this.movieService.getPhotos(this.almbumId);

  }
} 


