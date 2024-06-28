import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
