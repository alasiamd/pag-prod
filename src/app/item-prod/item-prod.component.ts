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
  //idProd: string = '';


  constructor(public prodService: ProdService) { }

  ngOnInit(): void {
    this.productos = this.prodService.getProductos();
  }

  //verProd(producto: Producto){
  //  this.idProd = producto.precio.toString();
  //}

}
