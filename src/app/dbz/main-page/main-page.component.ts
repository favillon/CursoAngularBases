import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
    
  nuevo:Personaje = {
    nombre : 'Roshi',
    poder : 1000
  }

  get personajes():Personaje[]{
    return this.dbzServices.personajes
  }
  
  constructor(private dbzServices:DbzServices ){}

  agregarNuevoPerosnaje(arg:Personaje){
    this.personajes.push(arg);
  }
}
