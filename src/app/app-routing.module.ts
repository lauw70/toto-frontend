import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from './components/static-pages/page-not-found/page-not-found.component';
import {DefaultLayoutComponent} from './components/layouts/default-layout/default-layout.component';


const appRoutes: Routes =
  [
    {
      path: '',
      component: DefaultLayoutComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
