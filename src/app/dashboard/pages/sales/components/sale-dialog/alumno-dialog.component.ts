import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlumnoActions } from '../../store/alumno.actions';
import { Docente } from '../../../buyers/models';
import { selectDocentesOptions, selectCursosOptions } from '../../store/alumno.selectors';
import { Observable } from 'rxjs';
import { course } from '../../../products/models';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-dialog',
  templateUrl: './alumno-dialog.component.html',
  styles: [
  ]
})
export class AlumnoDialogComponent implements OnInit {

  cursoIdControl = new FormControl(null, Validators.required);
  docenteIdControl = new FormControl(null, Validators.required);

  alumnoForm = new FormGroup({
    cursoId: this.cursoIdControl,
    docenteId: this.docenteIdControl,
  });

  docenteOptions$: Observable<Docente[]>;
  cursoOptions$: Observable<course[]>;

  constructor(private store: Store, private matDialogRef: MatDialogRef<AlumnoDialogComponent>) {
    this.docenteOptions$ = this.store.select(selectDocentesOptions);
    this.cursoOptions$ = this.store.select(selectCursosOptions);
  }

  ngOnInit(): void {
    this.store.dispatch(AlumnoActions.loadCursoOptions());
    this.store.dispatch(AlumnoActions.loadDocenteOptions());
  }

  onSubmit(): void {
    if (this.alumnoForm.invalid) {
      this.alumnoForm.markAllAsTouched();
    } else {
      this.store.dispatch(AlumnoActions.createAlumno({ payload: this.alumnoForm.getRawValue() }));
      this.matDialogRef.close();
    }
  }
}
