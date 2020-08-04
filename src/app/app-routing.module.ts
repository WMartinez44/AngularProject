import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
    {path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'Characters', component: CharactersComponent },
    { path: 'Character/:id', component: CharacterDetailsComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
const routingComponentsList = [
  HomeComponent,
  AboutComponent,
  CharactersComponent,
  CharacterDetailsComponent,
  PageNotFoundComponent 
]
