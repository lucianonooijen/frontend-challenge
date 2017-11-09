import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { DataService } from './services/data.service';
import { OrganizersComponent } from './components/organizers/organizers.component';
import { SalesComponent } from './components/sales/sales.component';

// Create routes
const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'organizers', component: OrganizersComponent},
  {path:'sales', component: SalesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OrganizersComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
