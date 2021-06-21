import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { CardComponent } from './card/card.component'; 
import { OpinionComponent } from './opinion/opinion.component';
import {ArtsComponent } from './arts/arts.component';
import { SearchComponent } from './search/search.component'; 
import {BusinessComponent} from './business/business.component';
import {TravelComponent} from './travel/travel.component';
import {USComponent} from './us/u.s.component';
import {TechComponent} from './tech/tech.component';
import {StyleComponent} from './style/style.component';
import {SpotsComponent} from './spots/spots.component';
import {ScienceComponent} from './science/science.component';
import {NYComponent} from './ny/n.y..component';
import { MagazineComponent} from './magazine/magazine.component';
import { HomeComponent} from './home/home.component';
import {HealthComponent} from './health/health.component';
import {FoodComponent} from './food/food.component';
import { PoliticsComponent } from './politics/politics.component';
import {BooksComponent } from './books/books.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
 
   {
     path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  
   },
      {
        path: "navbar",
        component: NavbarComponent
      },
    {
      path: "world",
      component: CardComponent
    },
    {
      path: "opinion",
      component: OpinionComponent
    },
    {
      path: "arts",
      component: ArtsComponent
    },
    {
      path: "search",
      component: SearchComponent
    },
    {
      path: "us",
      component: USComponent
    },
    {
      path: "travel",
      component: TravelComponent
    },
    {
      path: "tech",
      component: TechComponent
    },
    {
      path: "style",
      component: StyleComponent
    },
    {
      path: "spots",
      component: SpotsComponent
    },
    {
      path: "science",
      component: ScienceComponent
    },
    {
      path: "ny",
      component: NYComponent
    },
    {
      path: "maganize",
      component:  MagazineComponent
    },

    {
      path: "health",
      component: HealthComponent
    },
    {
      path: "food",
      component: FoodComponent
    },
    {
      path: "politics",
      component: PoliticsComponent
    },
    {
      path: "business",
      component: BusinessComponent
    },
    {
      path: "book",
      component: BooksComponent 
    },
    

   
      

    // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
