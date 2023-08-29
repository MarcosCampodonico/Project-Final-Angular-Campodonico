import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocenteService } from './services/docente.service';
import { Observable } from 'rxjs';
import { Docente } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DocenteDialogComponent } from './components/buyer-dialog/docente-dialog.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styles: [],
})
export class DocenteComponent implements OnInit, OnDestroy {
  docentes$: Observable<Docente[]>;
  displayedColumns = ['id', 'name', 'surname', 'email', 'actions'];

  constructor(private docentesService: DocenteService, private dialog: MatDialog) {
    this.docentes$ = this.docentesService.docente$;
  }
  ngOnDestroy(): void {
    this.docentesService.clearDocentes();
  }

  ngOnInit(): void {
    this.docentesService.loadDocente();
  }

  onCreate(): void {
    this.dialog.open(DocenteDialogComponent);
  }
  onDelete(id: number): void {
    this.docentesService.deleteDocenteById(id);
  }
}
