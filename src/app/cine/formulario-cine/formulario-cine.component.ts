import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { Coordenada } from 'src/app/utilidades/validadores/coordenada';
import { cineCreacionDTO } from '../cine';


@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder) { }
  form: FormGroup;
  @Input()
  modelo:cineCreacionDTO;
  @Output()
  guardarCambios:EventEmitter<cineCreacionDTO>=new EventEmitter<cineCreacionDTO>();
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre: ['',{
        validators: [Validators.required],
      },

      ],
    });
    if (this.modelo !==undefined){
this.form.patchValue(this.modelo);
    }
  }
    

  OnSubmit(){
this.guardarCambios.emit(this.form.value);
  }


}
