import { Component, OnInit } from '@angular/core';
import { CotizaciónService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public ejemplo : any[] | undefined;

  constructor(public sc : CotizaciónService) {

    this.sc.getDataTest().subscribe(data => this.ejemplo = data);

   }

  ngOnInit(): void {
  }

}
