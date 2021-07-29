import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CuentaAhorro from './model/ahorro.model';
import Cuenta from './model/cuenta.model';
import { Concepto, Contacto, Transferencia } from './model/interfaces';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  animations: [
    trigger('opacidad', [
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('visible <=> hide', [animate('0.5s 100ms')]),
    ]),
  ],
})
export class TransferComponent implements OnInit {
  @ViewChild('stepper') stepper: CdkStepper;

  formgroup: FormGroup;
  error : any | null;
  conceptos: Array<Concepto> = [];

  origenes: Array<Cuenta> = [];
  destinos: Array<Contacto> = [];
  transfer: Transferencia = { info: { concepto: {} } };

  constructor(private fb: FormBuilder) {
    
    this.origenes.push(new CuentaAhorro('123456701230', {} , 15000));
    this.destinos.push({
      CBU: '4567891011100000987654',
      titular: 'Lucas Losada',
      entidad: { nombre: 'Banco Macro' },
    });
    this.destinos.push({
      CBU: '9876543033308000123456',
      titular: 'Sebastian Rodríguez',
      entidad: { nombre: 'Banco Galicia' },
    });

  }

  ngOnInit(): void {

    this.formgroup = this.fb.group({
      débito: ['', Validators.required],
      monto: ['', Validators.required],
      cbu: ['', Validators.required],
      info : this.fb.group({
        concepto: ['', Validators.required],
        desc: [''],
        email: ['']
      })
    });

    this.conceptos.push({ id: 1, nombre: 'Alquileres' });
    this.conceptos.push({ id: 2, nombre: 'Couta' });
    this.conceptos.push({ id: 3, nombre: 'Expensas' });
    this.conceptos.push({ id: 4, nombre: 'Factura' });
    this.conceptos.push({ id: 5, nombre: 'Prestamo' });
    this.conceptos.push({ id: 6, nombre: 'Seguro' });
    this.conceptos.push({ id: 7, nombre: 'Varios' });
    
  }

  get cbu() {
    return this.formgroup.get('cbu').value;
  }

  get selected(){
    return this.destinos.find((contacto) => contacto.CBU === this.cbu);
  }

  get origen(){
    return <Cuenta>this.formgroup.get('débito').value;
  }

  Validar() {

    this.error = null;

    this.transfer.destino = this.selected;
    this.transfer.info = this.formgroup.get("info").value;
    this.transfer.monto = this.formgroup.get('monto').value;

    try {
      if (this.transfer.monto > 0){

        if (this.transfer.destino) {
         
          if (this.origen.Saldo >= this.transfer.monto) this.stepper.next();
          else throw 'El monto ingresado es mayor que saldo disponible';
    
        } else throw 'El CBU ingresado no existe';
  
      }else throw 'El monto ingresado no es válido';

    } catch (error) {

      this.error = error;
    } 

  }

  Transferir() {
    
    this.origen.Transferir(this.transfer);
    this.stepper.next();
    
  }

}

@Pipe({ name: 'TipoCuenta' })
export class TipoCuentaPipe implements PipeTransform {
  transform(value: Cuenta): string {
    return (value instanceof CuentaAhorro ? 'CA' : 'CTE').concat(' ', value.Moneda.simbolo);
  }
}


