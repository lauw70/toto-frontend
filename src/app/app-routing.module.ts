import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from './components/static-pages/page-not-found/page-not-found.component';
import {DefaultLayoutComponent} from './components/layouts/default-layout/default-layout.component';
import {OverviewComponent} from './components/pages/overview/overview.component';
import {MatchComponent} from './components/pages/match/match.component';


const appRoutes: Routes =
  [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    {
      path: 'main',
      component: DefaultLayoutComponent,
      children: [
        { path: '', redirectTo: 'overview', pathMatch: 'full' },
        { path: 'overview', component: OverviewComponent },
        { path: 'match/:id', component: MatchComponent },
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
