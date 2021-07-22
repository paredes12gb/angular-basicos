import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-Contador',
template: `
        <h1>{{ titulo}}</h1>
        <button (click)="ejercicio(base)"> +5 </button>
        <span> {{ numero}} </span>
        <button (click)="ejercicio(base * -1)"> -5 </button>`
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
   acumulador (valor: number){
     this.base += valor;
   }
  
   ejercicio (va: number){
     this.numero +=  va;
   }
}


