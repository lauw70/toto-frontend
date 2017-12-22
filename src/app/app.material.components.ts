import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

const MatModules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule
];

@NgModule({
  imports: MatModules,
  exports: MatModules,
})
export class AppMaterialComponents { }
