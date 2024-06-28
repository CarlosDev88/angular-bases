import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',

})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value:number):void{
    this.counter +=value;
  }

 public reset():void{
    this.counter =10;
  }
}
