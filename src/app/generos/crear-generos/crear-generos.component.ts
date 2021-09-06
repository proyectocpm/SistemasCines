import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeletramayuscu } from 'src/app/utilidades/validadores/primeletramayuscu';
import { generoCreacionDTO } from '../genero';


@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent {

  constructor(private router:Router, private formBuilder:FormBuilder) { }
  
  /*form: FormGroup;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
    //nombre:''
    nombre:['',{
      //validaciones de angular y personalizada
      validators:[Validators.required,Validators.minLength(3),primeletramayuscu()]}]
    });
  }*/
 guardarCambios(genero:generoCreacionDTO){
  console.log(genero)
   this.router.navigate(['generos']);
 } 
/*
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
*/
} 
