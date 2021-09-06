import { AbstractControl, ValidatorFn } from "@angular/forms";

export function primeletramayuscu():ValidatorFn{
    return (control:AbstractControl)=>{
        const valor=<string>control.value;
        if(!valor) return ;
        if(valor.length===0)return ;
        const primeraletra=valor[0];
        if(primeraletra!==primeraletra.toUpperCase()){
            return{
                primeletramayuscu:{
                    mensaje:'la primera debe ser mayuscula'
                }
            };

        }
        return;
    }
}