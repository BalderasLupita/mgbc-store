import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillaComponent } from './componentes/plantilla/plantilla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ModPrimeNgModule } from './mod-prime-ng/mod-prime-ng.module';
import { HeaderComponent } from './componentes/plantilla/header/header.component';
import { FooterComponent } from './componentes/plantilla/footer/footer.component';
import { PrimengModule } from './primeng.module';
import { ProductosModule } from './modulos/productos/productos.module';
import { CartComponent } from './componentes/cart/cart.component';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimengModule,
    ProductosModule,
    DataViewModule
  ],
  providers: [
    provideClientHydration()
   
   // { provide: HTTP_INTERCEPTORS, useClass: FetchHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
