import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCinesComponent } from './cine/crear-cines/crear-cines.component';
import { EditarCineComponent } from './cine/editar-cine/editar-cine.component';
import { IndiceCinesComponent } from './cine/indice-cines/indice-cines.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { PaginadestinoComponent } from './paginadestino/paginadestino.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';

const routes: Routes = [
{path:'',component:PaginadestinoComponent},
{path:'generos',component:IndiceGenerosComponent},
{path:'generos/crear',component:CrearGenerosComponent},
{path:'generos/editar/:id', component:EditarGeneroComponent},

{path:'actores',component:IndiceActoresComponent},
{path:'actores/crear',component:CrearActoresComponent},
{path:'actores/editar/:id',component:EditarActorComponent},

{path:'cines',component:IndiceCinesComponent},
{path:'cines/crear',component:CrearCinesComponent},
{path:'cines/editar/:id',component:EditarCineComponent},

{path:'peliculas/crear',component:CrearPeliculasComponent},
{path:'peliculas/editar/:id',component:EditarPeliculasComponent},
{path:'peliculas/buscar',component:FiltroPeliculasComponent},
{path:'**', redirectTo:''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
