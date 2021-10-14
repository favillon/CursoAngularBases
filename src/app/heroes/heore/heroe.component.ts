import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Ironman';
    edad:number = 45;

    get nombreCapatilizado(){
        return this.nombre.toLocaleUpperCase()
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman'
    }

    cambiarEdad():void{
        this.edad = 50
    }
    
    obtenerNombre():string{
        return `${this.nombre} de alguien`
    }
}