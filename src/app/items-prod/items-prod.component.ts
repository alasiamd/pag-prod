import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProdService } from '../services/prod.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-items-prod',
  templateUrl: './items-prod.component.html',
  styleUrls: ['./items-prod.component.css']
})
export class ItemsProdComponent implements OnInit {

  productos: Producto[] = [];
  producto: Producto[] = [];
  

  idProd:Producto[] = [];

  constructor( public prodService: ProdService,private rutaActiva: ActivatedRoute ) { }

  ngOnInit(): void {
    this.productos = this.prodService.getProductos();

    this.idProd = this.rutaActiva.snapshot.params.idProd;
    console.log(this.idProd);

    //var producto = this.productos.filter(productos => productos.id === this.idProd );    
    //this.producto = this.prodService.getProducto();
  }

}
