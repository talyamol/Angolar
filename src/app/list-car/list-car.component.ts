import { Component } from '@angular/core';
import { Car } from '../car.modlue';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent {
public carList: Car[]=[
{name:"toyota", id:"1234",price: 50000},
{name:"kia", id:"56478",price: 40000},
{name:"mazda", id:"9876",price: 80000}]
public car:Car=new Car();
constructor(){}
public add(car:Car)
{
  this.carList.push(car)
}

ngOnInit():void{
console.log(this.carList)
}

}
