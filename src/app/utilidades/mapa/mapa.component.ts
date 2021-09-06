import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { Coordenada } from '../validadores/coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }
  //componente padre va a revisir las coordenadas
@Output()
coordenadaSeleccionada:EventEmitter<Coordenada>=new EventEmitter<Coordenada>();
  ngOnInit(): void {
  }
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(46.879966, -121.726909)
  };
  capas: Marker<any>[]=[];
  //obtener la latitud y longitud 
  manejarClick(event: LeafletMouseEvent){
const latitud=event.latlng.lat;
const longitud=event.latlng.lng;
console.log({latitud,longitud});
//Para que no se repita los market a lo que se escoge
this.capas=[];
//pasarle la long y lat
this.capas.push(marker([latitud,longitud]));
this.coordenadaSeleccionada.emit({latitud:latitud,longitud:longitud});
  }
}
