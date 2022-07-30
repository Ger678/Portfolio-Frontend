export class Skills {
  id: number;
  icono: string;
  nombre: string;
  descripcion: string;
  fotos: string;
  porcentaje: number;

  constructor(
    id: number,
    icono: string,
    nombre: string,
    descripcion: string,
    fotos: string,
    porcentaje: number
  ) {
    this.id = id;
    this.icono = icono;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fotos = fotos;
    this.porcentaje = porcentaje;
  }
}
