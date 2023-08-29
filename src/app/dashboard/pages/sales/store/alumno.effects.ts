import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AlumnoActions } from './alumno.actions';
import { HttpClient } from '@angular/common/http';
import { CreateAlumnoPayload, alumno, AlumnoAndDocenteAndcurso } from '../models';
import { environment } from 'src/environments/environment';
import { DocenteService } from '../../buyers/services/docente.service';
import { Docente } from '../../buyers/models';
import { course } from '../../products/models';
import { Store } from '@ngrx/store';


@Injectable()
export class SaleEffects {

  loadAlumnos$ = createEffect(() => {
    return this.actions$.pipe(

      
      ofType(AlumnoActions.loadAlumno),


      concatMap(() =>
        this.getSalesFromDB().pipe(

          map(data => AlumnoActions.loadAlumnoSuccess({ data })),


          catchError(error => of(AlumnoActions.loadAlumnoFailure({ error }))))
      )
    );
  });

  loadDocenteOptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AlumnoActions.loadDocenteOptions),


      concatMap(() =>
        this.getBuyerOptions().pipe(

          map(data => AlumnoActions.loadDocenteOptionsSuccess({ data })),


          catchError(error => of(AlumnoActions.loadDocenteOptionsFailure({ error }))))
      )
    );
  });

  loadProductOptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AlumnoActions.loadCursoOptions),


      concatMap(() =>
        this.getProductOptions().pipe(

          map(data => AlumnoActions.loadCursoOptionsSuccess({ data })),


          catchError(error => of(AlumnoActions.loadCursoOptionsFailure({ error }))))
      )
    );
  });


  createSale$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AlumnoActions.createAlumno),


      concatMap((action) =>
        this.createSale(action.payload).pipe(

          map(data => AlumnoActions.createAlumnoSuccess({ data })),


          catchError(error => of(AlumnoActions.createAlumnoFailure({ error }))))
      )
    );
  });

  createSaleSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoActions.createAlumnoSuccess),
      map(() => this.store.dispatch(AlumnoActions.loadAlumno()))
    );
  }, { dispatch: false });


  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store) {}

  private getSalesFromDB(): Observable<AlumnoAndDocenteAndcurso[]> {
    return this.httpClient.get<AlumnoAndDocenteAndcurso[]>(environment.baseApiUrl + '/sales?_expand=product&_expand=buyer')
  }

  private getBuyerOptions(): Observable<Docente[]> {
    return this.httpClient.get<Docente[]>(environment.baseApiUrl + '/buyers')
  }

  private getProductOptions(): Observable<course[]> {
    return this.httpClient.get<course[]>(environment.baseApiUrl + '/products');
  }

  private createSale(payload: CreateAlumnoPayload): Observable<alumno> {
    return this.httpClient.post<alumno>(environment.baseApiUrl + '/sales', payload)
  }
}
