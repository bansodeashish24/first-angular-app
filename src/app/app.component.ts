import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>Hi</div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styles: ['div { background-color: blue;}']
})
export class AppComponent {
  title = 'fist-angular-app';
  welcomeMessage = 'Here is our ISSC class:';
  score = 100;

  student = {
    name: 'Gaurav',
    age: 20
  };

  students = ['Rohan', 'Raju', 'Adu', 'Rahul', 'Nikita', 'Preksha', 'Vrushali'];

  teachers = [
    {
      name: 'Dr. Bedekar',
      subject: 'Numerical Methods'
    },
    {
      name: 'Tandon Sir',
      subject: 'PPL'
    }
  ];

  day = 'Sunday';

  facebookImageLink = './assets/facebook-logo.png';

  showWhiteBoldText = true;

  sayHello() {
    console.log('HELLO!!!!!');
    this.showWhiteBoldText = !this.showWhiteBoldText;
  }


}
