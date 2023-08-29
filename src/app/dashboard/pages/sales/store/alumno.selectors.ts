import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumno from './alumno.reducer';

export const selectAlumnoState = createFeatureSelector<fromAlumno.State>(
  fromAlumno.alumnoFeatureKey
);


export const selectAlumnos = createSelector(selectAlumnoState, (state) => state.data)

export const selectDocentesOptions = createSelector(selectAlumnoState, (state) => state.docenteOptions)
export const selectCursosOptions = createSelector(selectAlumnoState, (state) => state.cursoOptions)
