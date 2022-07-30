export class Acerca {
  id: number;
  titulo: string;
  contenido: string;
  icono: string;

  constructor(id: number, titulo: string, contenido: string, icono: string) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.icono = icono;
  }
}
