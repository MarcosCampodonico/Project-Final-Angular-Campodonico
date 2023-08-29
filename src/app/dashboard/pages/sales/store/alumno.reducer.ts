import { createFeature, createReducer, on } from '@ngrx/store';
import { AlumnoActions } from './alumno.actions';
import { AlumnoAndDocenteAndcurso } from '../models';
import { Docente } from '../../buyers/models';
import { course } from '../../products/models';

export const alumnoFeatureKey = 'alumno';

export interface State {
  data: AlumnoAndDocenteAndcurso[];
  docenteOptions: Docente[];
  cursoOptions: course[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  data: [],
  docenteOptions: [],
  cursoOptions: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,


  
  on(AlumnoActions.loadAlumno, state => {
    return {
      ...state,
      loading: true
    }
  }),


  on(AlumnoActions.loadAlumnoSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
      loading: false
    }
  }),


  on(AlumnoActions.loadAlumnoFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    }
  }),


  

  on(AlumnoActions.loadDocenteOptions, (state) => state),
  on(AlumnoActions.loadDocenteOptionsSuccess, (state, action) => {
    return {
      ...state,
      buyerOptions: action.data,
    }
  }),


  on(AlumnoActions.loadCursoOptions, (state) => state),
  on(AlumnoActions.loadCursoOptionsSuccess, (state, action) => {
    return {
      ...state,
      productOptions: action.data,
    }
  })

);

export const saleFeature = createFeature({
  name: alumnoFeatureKey,
  reducer,
});

