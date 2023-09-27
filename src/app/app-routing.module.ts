import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes.component';
import { HomeComponent } from './components/home/home.component';
import { NaveComponent } from './components/nave/nave.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'nave', component: NaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
