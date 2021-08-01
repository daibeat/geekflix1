import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap, timestamp } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movie, PagedResults } from './movie';
import { MessageService } from './message.service';
import { environment } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';  // URL to web API
  private key = environment.apiKey; // Private API key

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }


  /*  getMovies() : Observable<any[]> {
     return this.http.get<any[]>(`${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=1`)
     // The Observable returned by get() is of type Observable<string>
     // because a text response was specified.
     // There's no need to pass a <string> type parameter to get().
     .pipe(
       tap(_ => console.log('fetched trending')),
       catchError(this.handleError<any[]>('getLatestReleases', []))
     );
 } */

  getMovieDetails(): Observable<PagedResults> {
    const url = `${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=1`;
    return this.http.get<PagedResults>(url);
  }

  getPhotos(albumId: any = []) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumid=${albumId}`)
  }

  // Returns list of upcoming releases this year 
  /*   getLatestReleases(): Observable<any[]> {
  return this.http.get<any[]>(`${this.moviesUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=1`)
    .pipe(
      tap(_ => console.log('fetched trending')),
      catchError(this.handleError<any[]>('getLatestReleases', []))
    );
} */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
