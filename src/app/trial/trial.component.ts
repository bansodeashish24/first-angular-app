import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  constructor() { }


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

  myName = 'Ashish';


  ngOnInit() {
  }

  sayHello() {
    console.log('HELLO!!!!!');
    this.showWhiteBoldText = !this.showWhiteBoldText;
  }

}
