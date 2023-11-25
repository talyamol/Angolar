import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    DetailCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
