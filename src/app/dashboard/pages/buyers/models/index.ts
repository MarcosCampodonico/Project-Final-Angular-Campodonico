export interface Docente {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export interface CreateDocentePayload {
  name: string | null;
  surname: string | null;
  email: string | null;
}
