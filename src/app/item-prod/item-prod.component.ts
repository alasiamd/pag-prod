import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto } from '../models/producto';
import { ProdService } from '../services/prod.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-item-prod',
  templateUrl: './item-prod.component.html',
  styleUrls: ['./item-prod.component.css']
})
export class ItemProdComponent implements OnInit {

  productos: Producto[] = [];
  productoActual: Producto[] = [];
  id:number =0;
  titulo:string = '';
  precio:number =0;
  imagen:string = '';
  //idProd: string = '';


  constructor(public prodService: ProdService) { }

  ngOnInit(): void {
    this.productos = this.prodService.getProductos();
  }

  verProd(producto:Producto){
    var id = producto.id;
    var titulo = producto.titulo;
    var precio = producto.precio;
    var imagen = producto.imagen;
    //let productoActual = new Producto();
    //productoActual = this.productos.find(producto => producto.id === idProd);
    //this.idProd = producto.precio.toString();
  }

}
