import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzServices{
    
    personajes : Personaje [] =[
        {
          nombre:'Goku',
          poder: 1000000
        },
        {
          nombre:'Vegeta',
          poder: 900000
        }
      ]

    constructor(){
        console.log('Servicio Inicializado');
    }
}