import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneModuleRoutingModule } from './one-module-routing.module';
import { OneComponentComponent } from './one-component/one-component.component';


@NgModule({
  declarations: [
    OneComponentComponent
  ],
  imports: [
    CommonModule,
    OneModuleRoutingModule
  ]
})
export class OneModuleModule { }
