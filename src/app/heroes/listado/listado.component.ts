import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  
  BorrarHeroe(id: number): void {
    this.heroeBorrado = this.heroes.splice(id, 1)[0];
  }
}
