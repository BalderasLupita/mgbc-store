import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  productos: Producto[] = [];

  constructor(private servProductos: ProductosService) {

  }

  ngOnInit(): void {
    //Invocar al servicio para obtener los productos
    this.servProductos.getProductos().subscribe(
            response => {
              this.productos = response
            }
    );
  }


}
