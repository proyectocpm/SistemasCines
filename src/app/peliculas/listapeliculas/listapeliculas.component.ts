import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.css']
})
export class ListapeliculasComponent implements OnInit {

  constructor() { }
@Input()
  peliculas;


  ngOnInit(): void {
   /* this.peliculas=[{
      titulo:'Batman',
      fechalanzamiento:new Date(),
      precio:20.50
    },
  {
    titulo:'Latinos',
      fechalanzamiento:new Date(),
      precio:22.50
  }]*/

  }
Funcioneliminar(indicePelicula:number):void{
  this.peliculas.splice(indicePelicula,1);

}
}
