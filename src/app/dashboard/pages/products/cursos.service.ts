import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import {  course } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private curso$ = new BehaviorSubject<course[]>([]);
  

  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<course[]> {
    return this.curso$.asObservable();
  }

  loadProducts(): void {
 
    this.curso$.next([
      {
        id: 1,
        name: 'Desarrollo Front-end',
        description: 'Web Developer',
        price: 1000,
        lugares: 50,
        cursoId: 1,
      },
      {
        id: 2,
        name: 'programacion backend',
        description: 'Web Developer',
        price: 500,
        lugares: 25,
        cursoId: 2,
      },
      {
        id: 3,
        name: 'Data Scientist',
        description: 'Data',
        price: 800,
        lugares: 15,
        cursoId: 1,
      },
    ]);
  }

  create(): void {
    
    this.curso$.pipe(take(1)).subscribe({
      next: (arregloActual) => {
        this.curso$.next([
          ...arregloActual,
          {
            id: arregloActual.length + 1,
            name: 'Random name',
            description: 'Random description',
            price: 5400,
            lugares: 23,
            cursoId: 1,
          },
        ]);
      },
    });
  }

  deleteById(id: number): void {
    this.curso$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.curso$.next(
          arrayActual.filter((p) => p.id !== id),
        );
      }
    })
  }

  getProductsByCategoryId(cursoId: number): Observable<course[]> {
    return this.http.get<course[]>(environment.baseApiUrl + `/products?categoryId=${cursoId}`)
  }
}
