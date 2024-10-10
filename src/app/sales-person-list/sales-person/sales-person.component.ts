import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-person',
  standalone: true,
  imports: [],
  templateUrl: './sales-person.component.html',
  styleUrl: './sales-person.component.css',
})
export class SalesPersonComponent {
  constructor(
    public theFirstName: String,
    public theLastName: String,
    public theEmail: String,
    public theSalesVolume: Number
  ) {}

  public getFirstName() {
    return this.theFirstName;
  }

  public getLastName() {
    return this.theLastName;
  }

  public getEmail() {
    return this.theEmail;
  }

  public getSalesVolume() {
    return this.theSalesVolume;
  }

  public setFirstName(firstName: String) {
    this.theFirstName = firstName;
  }

  public setLastName(lastName: String) {
    this.theLastName = lastName;
  }

  public setEmail(email: String) {
    this.theEmail = email;
  }

  public setSalesVolume(salesVolume: Number) {
    this.theSalesVolume = salesVolume;
  }
  getInformation() {
    return (
      this.theFirstName +
      ' ' +
      this.theLastName +
      ' ' +
      this.theEmail +
      ' ' +
      this.theSalesVolume
    );
  }
}
