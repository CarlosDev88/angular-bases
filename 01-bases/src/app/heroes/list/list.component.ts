import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  public deletedHeroe?: string;

  public removeLastHeroe(): void {
    this.deletedHeroe = this.heroesNames.pop();
  }
}
