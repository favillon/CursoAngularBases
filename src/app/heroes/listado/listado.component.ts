import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent{

  heroes : string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor']
  heroesDelete:string[] = []
  
  borrarHeroe():void{
    let deleteHeroe = this.heroes.shift() || ''
    this.heroesDelete.push(deleteHeroe);
  }  
}
