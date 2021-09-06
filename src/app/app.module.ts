import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MarkdownModule} from 'ngx-markdown';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import {ReactiveFormsModule} from '@angular/forms';
import { ListapeliculasComponent } from './peliculas/listapeliculas/listapeliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule}from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { PaginadestinoComponent } from './paginadestino/paginadestino.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';
import { IndiceCinesComponent } from './cine/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './cine/crear-cines/crear-cines.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cine/editar-cine/editar-cine.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { from } from 'rxjs';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioCineComponent } from './cine/formulario-cine/formulario-cine.component';
import{LeafletModule}from '@asymmetrik/ngx-leaflet';
import { MapaComponent } from './utilidades/mapa/mapa.component'

@NgModule({
  declarations: [
    AppComponent,
    ListapeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    PaginadestinoComponent,
    IndiceGenerosComponent,
    CrearGenerosComponent,
    IndiceActoresComponent,
    CrearActoresComponent,
    CrearPeliculasComponent,
    IndiceCinesComponent,
    CrearCinesComponent,
    EditarActorComponent,
    EditarCineComponent,
    EditarPeliculasComponent,
    EditarGeneroComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,ReactiveFormsModule,
    LeafletModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
