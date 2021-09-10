import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  name = 'Ricky Dinero';
  balance: string = "25000.00";
  caja_de_ahorro: string = "$ 983 0123456789"
  money = 15;
  constructor() {}

  ngOnInit(): void {}
}
