import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ArtsComponent } from './arts/arts.component';
import { SearchComponent } from './search/search.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { SpotsComponent } from './spots/spots.component';
import { StyleComponent } from './style/style.component';
import { FoodComponent } from './food/food.component';
import { TravelComponent } from './travel/travel.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NYComponent } from './ny/n.y..component';
import { USComponent } from './us/u.s.component';
import { HomeComponent } from './home/home.component';
import { PoliticsComponent } from './politics/politics.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    OpinionComponent,
    ArtsComponent,
    SearchComponent,
    BusinessComponent,
    TechComponent,
    ScienceComponent,
    HealthComponent,
    SpotsComponent,
    StyleComponent,
    FoodComponent,
    TravelComponent,
    MagazineComponent,
    NYComponent,
    USComponent,
    HomeComponent,
    PoliticsComponent,
    BooksComponent,
    LoginComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
