import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { PrimengModule } from '../../primeng.module';
import { ProductoListaComponent } from '../../componentes/producto-lista/producto-lista.component';



@NgModule({
  declarations: [
    ProductoComponent,
    ProductoListaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    ProductoComponent,
    ProductoListaComponent
  ]

})
export class ProductosModule { }
