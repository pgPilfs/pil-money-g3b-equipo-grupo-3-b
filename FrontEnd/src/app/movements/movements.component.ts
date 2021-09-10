import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css'],
})
export class MovementsComponent implements OnInit {
  constructor() {
    const profile: string =
      'https://images.unsplash.com/photo-1573497620166-aef748c8c792?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
  }

  ngOnInit(): void {}
}
