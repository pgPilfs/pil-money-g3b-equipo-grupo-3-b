import { Component, OnInit } from '@angular/core';
import { CotizaciónService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  
  dolar: any;
  variacion: number;
  await : boolean = true;

  constructor(public sc: CotizaciónService) {
    
    sc.getDolar().subscribe(
      (data) => { this.dolar = data[0], this.variacion = data[1] },
      (error) => { console.log(error) })
      .add(() => {
       this.await = false;
   });

  }

  ngOnInit(): void {}
}
