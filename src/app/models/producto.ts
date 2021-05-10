import { IProducto } from './interfaces/iproducto';

export class Producto implements IProducto{
    id: number = 0;
    titulo:string = '';
    precio: number = 0;
    imagen:string = '';
    descripcion:string = '';
}