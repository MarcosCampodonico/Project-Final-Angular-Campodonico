import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteComponent } from './docente.component';
import { DocenteDialogComponent } from './components/buyer-dialog/docente-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocenteRoutingModule } from './docente-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DocenteComponent, DocenteDialogComponent],
  imports: [CommonModule, DocenteRoutingModule, SharedModule, MatDialogModule],
})
export class DocenteModule {}
