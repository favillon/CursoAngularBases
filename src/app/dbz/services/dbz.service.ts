import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzServices{
    
    private _personajes : Personaje [] =[
        {
          nombre:'Goku',
          poder: 1000000
        },
        {
          nombre:'Vegeta',
          poder: 900000
        }
    ]

    get personajes():Personaje[]{
        return this._personajes
    }

    constructor(){
        console.log('Servicio Inicializado');
    }

    agregarNuevoPerosnaje(arg:Personaje){
        this._personajes.push(arg);
    }
}