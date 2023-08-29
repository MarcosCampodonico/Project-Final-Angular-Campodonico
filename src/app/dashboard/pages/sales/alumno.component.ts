import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlumnoActions } from './store/alumno.actions';
import { AlumnoAndDocenteAndcurso } from './models';
import { selectAlumnos } from './store/alumno.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from './components/sale-dialog/alumno-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumno.component.html',
  styles: [],
})
export class AlumnosComponent implements OnInit {
  displayedColumns = ['id', 'alumno', 'curso', 'total'];
  alumno$: Observable<AlumnoAndDocenteAndcurso[]>;

  constructor(private store: Store, private matDialog: MatDialog) {
    this.alumno$ = this.store.select(selectAlumnos)
  }

  onAdd(): void {
    this.matDialog.open(AlumnoDialogComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(AlumnoActions.loadAlumno())
  }
}
