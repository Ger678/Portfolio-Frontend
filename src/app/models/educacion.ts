export class Educacion {

    id: number;
    itemId: number;
    titulo: string;
    fecha: string;
    icono: string;

    constructor(id: number,itemId: number,titulo: string, fecha: string, icono: string) {
        this.id = id;
        this.itemId = itemId;
        this.titulo = titulo;
        this.fecha = fecha;
        this.icono = icono;
    }

}
