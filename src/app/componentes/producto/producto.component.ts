import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto: Producto | undefined 
  cart: Producto[] =[];
  isEncontrado: boolean = false
  
  constructor(){
  }

  get nombre(){
    return this.producto?.nombre
  }

  add(){
    console.log("Estoy comprando"+ this.producto?.nombre)
    this.cart = JSON.parse(localStorage.getItem('cart')as string)
    this.isEncontrado = false

    if(this.cart.length > 0){
      this.cart.forEach(elem =>{
        if (elem.id === this.producto?.id){
          elem.cantidad += 1
          this.isEncontrado = true
        }
      })

      if(!this.isEncontrado) {
        this.cart.push({id: this.producto?.id as number,
          nombre:this.producto?.nombre as string,
          descripcion:this.producto?.descripcion as string,
          precio:this.producto?.precio as number,
          imagen:this.producto?.imagen as string,
          talla:this.producto?.talla as number,
          color:this.producto?.color as string,
          estilo:this.producto?.estilo as string,
          cantidad: 1
          })        
      }

    }else {
    
    this.cart.push({id: this.producto?.id as number,
    nombre:this.producto?.nombre as string,
    descripcion:this.producto?.descripcion as string,
    precio:this.producto?.precio as number,
    imagen:this.producto?.imagen as string,
    talla:this.producto?.talla as number,
    color:this.producto?.color as string,
    estilo:this.producto?.estilo as string,
    cantidad: 1
    })

    }
  localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
