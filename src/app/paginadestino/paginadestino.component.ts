import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginadestino',
  templateUrl: './paginadestino.component.html',
  styleUrls: ['./paginadestino.component.css']
})
export class PaginadestinoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines=[{
        titulo:'Batman',
        fechalanzamiento:new Date(),
        precio:20.50,
        poster:'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/c/cuando-es-mejor-comer-frutas-1.jpg'
    
      },
    
     {
      titulo:'Latinos3',
        fechalanzamiento:new Date(),
        precio:22.50,
        poster:'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/c/cuando-es-mejor-comer-frutas-1.jpg'
    }]
    }, 500);
  }
  peliculasEnCines;
  peliculasDeEstreno =[{
    titulo:'Batman retorna 2021',
    fechalanzamiento:new Date(),
    precio:20.50,
    poster:'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/c/cuando-es-mejor-comer-frutas-1.jpg'
    
  },
{
  titulo:'Lola pelusa',
    fechalanzamiento:new Date(),
    precio:22.50,
    poster:'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/c/cuando-es-mejor-comer-frutas-1.jpg'
    
}]}