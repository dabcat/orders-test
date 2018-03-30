import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
