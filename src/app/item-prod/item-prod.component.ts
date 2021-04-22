import { Component, OnInit } from '@angular/core';

import { Producto } from '../models/producto';

@Component({
  selector: 'app-item-prod',
  templateUrl: './item-prod.component.html',
  styleUrls: ['./item-prod.component.css']
})
export class ItemProdComponent implements OnInit {

  productos: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
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
  }

}
