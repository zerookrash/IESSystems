import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  array = [
    { nombre: 'c1', valor: 4 },
    { nombre: 'c2', valor: 5 }
  ];

  array2 = [];

  objeto = new Object();


  constructor() {
  }

  ngOnInit() {
    this.toObject();
    console.log(this.array);
    console.log(this.objeto);
    this.toArray();
  }


  toObject() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.array.length; i++) {
      this.objeto[this.array[i].nombre] = this.array[i].valor;
    }
  }

  toArray() {
    // tslint:disable-next-line: forin
    for ( const prop in this.objeto ) {
      const obj1 = `nombre: ${prop}, valor: ${this.objeto[prop]}`;
      console.log(obj1);
      this.array2.push({obj1});
    }
    console.log(this.array2);
  }


}
