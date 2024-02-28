import { Component } from '@angular/core';
import { ProductosService } from './servicios/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mgbc-store';
  showCart: boolean = true

  toogleCart(){
    this.showCart = !this.showCart
  }

  constructor(private service:ProductosService){
    localStorage.setItem('cart', JSON.stringify([]))
  }
}
