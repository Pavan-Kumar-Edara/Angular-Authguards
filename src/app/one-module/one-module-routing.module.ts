import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponentComponent } from './one-component/one-component.component';

const routes: Routes = [
  {path:"onecomponent",component:OneComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneModuleRoutingModule { }
