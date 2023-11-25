import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.modlue';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit  {
  
  @Input()car!:Car
  constructor(){}
  ngOnInit(): void {
    console.log(this.car)
  }

}
