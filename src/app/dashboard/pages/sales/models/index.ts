import { Docente } from '../../buyers/models';
import { course } from '../../products/models';

export interface alumno {
  id: number;
  cursoId: number;
  docenteId: number;
}

export interface AlumnoAndDocenteAndcurso extends alumno {
  curso: course;
  docente: Docente;
}

export interface CreateAlumnoPayload {
  cursoId: number | null;
  docenteId: number | null;
}
