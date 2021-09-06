import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
imagenBase64 :string;
@Input()
urlImagenActual:string;

@Output()
archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();
  ngOnInit(): void {
  }
  //obtener el archivo selecionado
  change(event){
if(event.target.files.length >0){
  const file:File=event.target.files[0];
  toBase64(file).then((value:string)=> this.imagenBase64=value)
  .catch(error =>console.log(error));
//Enviar el archivo a otro formulario
this.archivoSeleccionado.emit(file);
//que no aparezcan dos fotos a lo que selecione
this.urlImagenActual=null;
}
  }

}
