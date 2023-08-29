import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Docente } from '../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docente-dialog',
  templateUrl: './docente-dialog.component.html',
  styles: [],
})
export class DocenteDialogComponent {
  editingDocente?: Docente;
  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),
  ]);

  surnameControl = new FormControl<string | null>(null, [Validators.required]);
  emailControl = new FormControl<string | null>(null, [Validators.required]);

  docenteForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
  });

  

  constructor(
    private dialogRef: MatDialogRef<DocenteDialogComponent>,
    private DocenteService: DocenteService,
    @Inject(MAT_DIALOG_DATA) private data?: Docente
  ) {
    if (this.data) {
      this.editingDocente = this.data;
      this.nameControl.setValue(this.data.name);
      this.surnameControl.setValue(this.data.surname);
      this.emailControl.setValue(this.data.email);
    }
  }

  onSubmit(): void {
    if (this.docenteForm.invalid) {
      this.docenteForm.markAllAsTouched();
    } else {
      this.DocenteService.createDocente(this.docenteForm.getRawValue(), () => {
        this.dialogRef.close(this.docenteForm.value);
      });
    }
  }
}
