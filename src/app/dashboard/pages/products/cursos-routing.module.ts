import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosModule } from './cursos.module';

const routes: Routes = [
  {
    
    path: '',
    component: CursosModule,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
