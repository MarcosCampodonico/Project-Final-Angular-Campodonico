import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocenteComponent } from './docente.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DocenteComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DocenteRoutingModule {}
