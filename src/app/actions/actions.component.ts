import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
})
export class ActionsComponent implements OnInit {
  name = 'Antony';
  balance = 10;
  money = 15;
  payment: number | undefined;
  payMoney: () => void;

  constructor() {
    this.payMoney = function () {
      console.log('Paying the money ' + this.payment);
      if (this.payment) {
        this.money += this.payment;
      }
    };
  }

  ngOnInit(): void {}
}
