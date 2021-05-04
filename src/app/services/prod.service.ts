import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { ActivatedRoute, Params } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProdService {
  productos: Producto[] = [];
  
  idProd:number = 0;


  constructor(private rutaActiva: ActivatedRoute ) {
    this.productos = [
      {
        id: 1,
        titulo: 'Cloudbook PcBox Fire PCB-GLW1 ',
        precio: 54000,
        imagen:'../../assets/PcBox.png'
      },
      {
        id: 2,
        titulo: 'Cpu AMD Ryzen 5 2400G',
        precio: 49000,
        imagen:'../../assets/20170427.jpg'
      },
      {
        id: 3,
        titulo: 'Cpu Gamer Amd Ryzen 3 3200G',
        precio: 62000,
        imagen:'../../assets/GSF.jpg'
      }
    ]

    //this.idProd = this.rutaActiva.snapshot.params.idProd;
    //this.producto = this.productos.filter(productos => productos.id === this.idProd );
    
   }

   getProductos(){
     return this.productos;
   }

  
  // getProducto(producto:number){
  //  this.producto = this.productos.join(producto);
  //}

}
