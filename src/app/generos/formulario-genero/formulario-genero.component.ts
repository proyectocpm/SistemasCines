import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { primeletramayuscu } from 'src/app/utilidades/validadores/primeletramayuscu';
import { generoCreacionDTO } from '../genero';
@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder) { }
  form: FormGroup;
  @Input()
  modelo:generoCreacionDTO;
  @Output()
  OnSubmit:EventEmitter<generoCreacionDTO>=new EventEmitter< generoCreacionDTO>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      //nombre:''
      nombre:['',{
        //validaciones de angular y personalizada
        validators:[Validators.required,Validators.minLength(3),primeletramayuscu()]}]
      });
      if(this.modelo !== undefined){
this.form.patchValue(this.modelo);
      }
    }
    guardarcambios(){
  this.OnSubmit.emit(this.form.value);
    }
    Obtenererrorcamponombre(){
      var campo=this.form.get('nombre');
      if(campo.hasError('minlength')){
        return 'Minimo carcateres es de 3'
            }
  
      if(campo.hasError('required')){
        return 'El campo requiere nombre'
      }
      //personalizada validacion
      if(campo.hasError('primeletramayuscu')){
        return campo.getError('primeletramayuscu').mensaje;
      }
     
    return '';
    }
  
  }
  
