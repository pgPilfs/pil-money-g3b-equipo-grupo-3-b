import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Concepto, Contacto, Transferencia } from './model/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ActionService } from 'src/app/operations/action/action.service';
import { ICuenta } from './model/cuenta.interfaz';

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
  @ViewChild('dialog') dialogTemplate: TemplateRef<any>;

  formgroup: FormGroup;
  error: any = null;
 
  conceptos: Array<Concepto> = [];
  origenes: Array<ICuenta> = [];
  destinos: Array<Contacto> = [];
  transfer: Transferencia = { info: { concepto: {} } };

  constructor(private fb: FormBuilder, public dialog: MatDialog, public sa: ActionService){
    this.origenes = sa.getICuentas;
    this.destinos = sa.getContactos;
  }

  ngOnInit(): void {
    this.formgroup = this.fb.group({
      débito: ['', Validators.required],
      monto: ['', Validators.required],
      cbu: ['', Validators.required],
      info: this.fb.group({
        concepto: ['', Validators.required],
        desc: [''],
        email: [''],
      }),
    });

    this.conceptos.push({ id: 1, nombre: 'Alquileres' });
    this.conceptos.push({ id: 2, nombre: 'Couta' });
    this.conceptos.push({ id: 3, nombre: 'Expensas' });
    this.conceptos.push({ id: 4, nombre: 'Factura' });
    this.conceptos.push({ id: 5, nombre: 'Prestamo' });
    this.conceptos.push({ id: 6, nombre: 'Seguro' });
    this.conceptos.push({ id: 7, nombre: 'Varios' });

    this.formgroup.patchValue({débito: this.origenes[0]})

  }

  get cbu() {
    return this.formgroup.get('cbu').value;
  }

  get find() {
    return this.destinos.find((contacto) => contacto.CBU === this.cbu);
  }

  get origen() {
    return <ICuenta>this.formgroup.get('débito').value;
  }

  Validar() {
    this.transfer.destino = this.find;
    this.transfer.info = this.formgroup.get('info').value;
    this.transfer.monto = Number(this.formgroup.get('monto').value);
   
    try {
      if (this.transfer.monto > 0) {
        if (this.transfer.destino) {
          if (this.origen.saldo >= this.transfer.monto) this.stepper.next();
          else throw 'El monto ingresado es mayor que saldo disponible';
        } else throw 'El CBU ingresado no existe';
      } else throw 'El monto ingresado no es válido';
    } catch (error) {
      this.error = error;
      this.dialog.open(this.dialogTemplate);
    }
  }

  Transferir() {

    this.origen.saldo -= this.transfer.monto
    this.sa.setICuentas = this.origenes;
   
    this.sa.setMovimiento(
      'Transferencia de '.concat(this.transfer.destino.titular),
      this.transfer.monto,
      this.origen.saldo,
      this.sa.TipoMovimiento[0],
      null,
      this.origen.id
    );
    
    this.stepper.next();
  }
}





