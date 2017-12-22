import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppMaterialComponents} from './app.material.components';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { PageNotFoundComponent } from './components/static-pages/page-not-found/page-not-found.component';
import {routing} from './app-routing.module';
import { OverviewComponent } from './components/pages/overview/overview.component';
import {MaterializeModule} from 'angular2-materialize';
import {GlobalVarsService} from './services/global-vars.service';
import {MatchService} from './services/match.service';
import {TeamService} from './services/team.service';
import { MatchComponent } from './components/pages/match/match.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    PageNotFoundComponent,
    OverviewComponent,
    MatchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppMaterialComponents,
    routing,
    MaterializeModule
  ],
  providers: [
    GlobalVarsService,
    MatchService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
