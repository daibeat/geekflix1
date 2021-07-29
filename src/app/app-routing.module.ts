import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie-detail', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }