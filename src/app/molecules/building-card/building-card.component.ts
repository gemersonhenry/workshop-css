import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: [
    './building-card.component-responsive.scss',
    './building-card.component-desktop.scss',
    './common.component.scss'
  ]
})
export class BuildingCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
