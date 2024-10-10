import { Component, OnInit } from '@angular/core';
import { SalesPersonComponent } from './sales-person/sales-person.component';
import { CommonModule } from '@angular/common'; // Import this module to use ngFor directive

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css',
})
export class SalesPersonListComponent implements OnInit {
  ngOnInit(): void {}

  // Create an array of sales persons
  salesPersons = [
    new SalesPersonComponent('Anup', 'Kumar', 'anup.kumar@luv2code.com', 5000),
    new SalesPersonComponent('John', 'Doe', 'john.doe@luv2code.com', 4000),
    new SalesPersonComponent(
      'Claire',
      'Murphy',
      'claire.murphy@luv2code.com',
      90000
    ),
    new SalesPersonComponent('Mai', 'Truong', 'mai.truong@luv2code.com', 60000),
  ];

  constructor() {}

  // Create a method to convert number to integer
  toInteger(num: Number) {
    return Math.floor(Number(num));
  }
}
