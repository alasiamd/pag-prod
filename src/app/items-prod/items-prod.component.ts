import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProdService } from '../services/prod.service';
import { IProducto } from '../models/interfaces/iproducto';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-items-prod',
  templateUrl: './items-prod.component.html',
  styleUrls: ['./items-prod.component.css']
})
export class ItemsProdComponent implements OnInit {

  public productos: Producto[] = [];
 
  idProd:number = 0;

  constructor( public prodService: ProdService,private rutaActiva: ActivatedRoute ) { }

  ngOnInit(): void {
    this.productos = this.prodService.getProductos();

    this.idProd = this.rutaActiva.snapshot.params.idProd;

    //this.producto = this.productos.filter(productos => productos.id === this.idProd );    
    //this.producto = this.prodService.getProducto();
  }



}
