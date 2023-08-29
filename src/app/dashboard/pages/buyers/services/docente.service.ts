import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Docente, CreateDocentePayload } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DocenteService {
  private _docente$ = new BehaviorSubject<Docente[]>([]);
  private readonly baseUrl = environment.baseApiUrl + '/buyers';
  public docente$ = this._docente$.asObservable();

  constructor(private httpClient: HttpClient) {}

  loadDocente(): void {
    this.httpClient.get<Docente[]>(this.baseUrl).subscribe({
      next: (docentes) => {
        this._docente$.next(docentes); 
      },
      error: () => {
       
      },
    });
  }

  createDocente(payload: CreateDocentePayload, afterCreate?: () => void): void {
    this.httpClient.post<Docente>(this.baseUrl, payload).subscribe({
      next: () => {
        this.loadDocente(); 
        if (afterCreate) afterCreate();
      },
      error: () => {
        
      },
    });
  }

  deleteDocenteById(id: number): void {
    this.httpClient.delete(this.baseUrl + '/' + id).subscribe({
      next: () => {
        this.loadDocente(); 
      },
      error: () => {
        
      },
    });
  }

  clearDocentes(): void {
    this._docente$.next([]);
  }
}
