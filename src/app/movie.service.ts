import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class MovieService {

  albums = [];
 
/* 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; */

    constructor(private http: HttpClient) { }


    getMovies() {
      return this.http.get("https://jsonplaceholder.typicode.com/albums");
    }


    getPhotos(albumId: any=[]) {
      return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    }






  // Http Options
 /*  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  */
     /** GET movies from the server */
/*      getMovies(id: number): Observable<Movie[]> {
      console.log(`getMovieDetails id: ${id}`);
  return this.http.get<Movie[]>(`${this.moviesUrl}/movie/${id}${this.key}&append_to_response=credits`)
    .pipe(
      tap(_ => console.log('fetched movie details')),
      catchError(this.handleError<Movie[]>('getMovieDetails', []))
    );
} */

      
      // Returns list of upcoming releases this year 
    /*   getLatestReleases(): Observable<any[]> {
    return this.http.get<any[]>(`${this.moviesUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=1`)
      .pipe(
        tap(_ => console.log('fetched trending')),
        catchError(this.handleError<any[]>('getLatestReleases', []))
      );
  } */



 
}
 