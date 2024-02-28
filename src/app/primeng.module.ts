import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';


const componentes:any = [
  ButtonModule,
  SidebarModule,
  ToastModule,
  CardModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    componentes
  ], exports: [
    componentes
  ]
})
export class PrimengModule { }
