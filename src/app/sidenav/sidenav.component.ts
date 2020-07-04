import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  value = false;
  sidenavMode = 'push';
  constructor() { }

  ngOnInit(): void {
  }
}
