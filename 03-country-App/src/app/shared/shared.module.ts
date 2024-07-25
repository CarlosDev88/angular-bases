import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,// esto funciona porque AppRoutingModule tiene el RouterModule.forRoot()
    // y al ahcer este llamado se diuplica el llamado al metodo RouterModule.forRoot() y da error
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
