import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateAlumnoPayload, alumno, AlumnoAndDocenteAndcurso } from '../models';
import { course } from '../../products/models';
import { Docente } from '../../buyers/models';

export const AlumnoActions = createActionGroup({
  source: 'Alumno',
  events: {
    'Load alumno': emptyProps(),
    'Load alumno Success': props<{ data: AlumnoAndDocenteAndcurso[] }>(),
    'Load alumno Failure': props<{ error: HttpErrorResponse }>(),

    'Load curso Options': emptyProps(),
    'Load curso Options Success': props<{ data: course[] }>(),
    'Load curso Options Failure': props<{ error: HttpErrorResponse }>(),

    'Load docente Options': emptyProps(),
    'Load docente Options Success': props<{ data: Docente[] }>(),
    'Load docente Options Failure': props<{ error: HttpErrorResponse }>(),

    'Create alumno': props<{ payload: CreateAlumnoPayload }>(),
    'Create alumno Success': props<{ data: alumno }>(),
    'Create alumno Failure': props<{ error: HttpErrorResponse }>(),
  }
});
