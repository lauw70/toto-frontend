import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppMaterialComponents} from './app.material.components';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { PageNotFoundComponent } from './components/static-pages/page-not-found/page-not-found.component';
import {routing} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppMaterialComponents,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
