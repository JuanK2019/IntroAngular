import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
        <h1>Hola Mundo!</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="Accumulate(base)">+{{base}}</button>
        <span>{{number}}</span>
        <button (click)="Accumulate(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{
    title: string = 'Acumulador app';
    number: number = 10;
    base: number = 5;

    Accumulate(value: number){
        this.number += value;
    }
}