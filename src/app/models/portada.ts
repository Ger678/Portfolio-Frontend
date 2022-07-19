export class Portada {

    id: number;
    nombre: string;
    subtitulo: string;
    perfilUrl: string;
    portadaUrl: string;
    contenido: string;

    constructor(id: number, nombre: string, subtitulo: string, perfilUrl: string, portadaUrl: string, contenido: string) {
        this.id = id;
        this.nombre = nombre;
        this.subtitulo = subtitulo;
        this.perfilUrl = perfilUrl;
        this.portadaUrl = portadaUrl;
        this.contenido = contenido;
    }
}
