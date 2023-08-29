import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumno-routing.module';
import { AlumnosComponent } from './alumno.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { SaleEffects } from './store/alumno.effects';
import { StoreModule } from '@ngrx/store';
import { saleFeature } from './store/alumno.reducer';
import { AlumnoDialogComponent } from './components/sale-dialog/alumno-dialog.component';

@NgModule({
  declarations: [AlumnosComponent, AlumnoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule,
    StoreModule.forFeature(saleFeature),
    EffectsModule.forFeature([SaleEffects])
  ],
})
export class AlumnoModule {}
