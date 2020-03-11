import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foodItems = ['Pav Bhaji', 'Pizza', 'Biryani', 'Rajma Rice', 'Ice Cream'];
  drinks = ['Coke', 'Pepsi', 'Limca', 'Mirinda'];
  constructor() { }

  ngOnInit() {
  }

  showItemClicked(item) {
    alert(item + ' clicked!');
  }

}
