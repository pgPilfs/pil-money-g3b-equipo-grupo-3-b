import { Injectable } from '@angular/core';
import { ICuenta } from '../transfer/model/cuenta.interfaz';
import { Contacto } from '../transfer/model/interfaces';
import { Movimiento, TipoMovimiento } from './model/action.model';

@Injectable()
export class ActionService {
  private tipomov = Array<TipoMovimiento>();

  constructor() {
    this.tipomov = new Array<TipoMovimiento>(
      { id: 1, nombre: 'Transferencia' },
      { id: 2, nombre: 'Extracción' },
      { id: 3, nombre: 'Recibo' }
    );

    if (sessionStorage.getItem('actions') === null) {
      sessionStorage.actions = JSON.stringify(new Array<Movimiento>());
    }

    if (sessionStorage.getItem('cuentas') === null) {
      let cuentas = new Array<ICuenta>();

      cuentas.push({
        id: '123456701230',
        tipo: 'CA',
        contacto: {},
        saldo: 15000,
        moneda: { tipo: 'pesos', descripcion: 'pesos argentino', simbolo: '$' },
      });
      
      cuentas.push({
        id: '111456701230',
        tipo: 'CA',
        contacto: {},
        saldo: 5000,
        moneda: { tipo: 'dolar', simbolo: 'U$D' },
      });

      sessionStorage.cuentas = JSON.stringify(cuentas);
    }

    if (sessionStorage.getItem('contactos') === null) {

      let contactos = new Array<Contacto>();

      contactos.push({
        CBU: '4567891011100000987654',
        titular: 'Lucas Losada',
        entidad: { nombre: 'Banco Macro' },
      });
      contactos.push({
        CBU: '9876543033308000123456',
        titular: 'Sebastian Rodríguez',
        entidad: { nombre: 'Banco Galicia' },
      });

      sessionStorage.contactos = JSON.stringify(contactos);
    }

  }

  setMovimiento(
    desc: string,
    monto: number,
    saldo: number,
    tipo: TipoMovimiento,
    fecha: Date,
    id_operation: string
  ): void {
    let actions = this.getActions;

    let mov: Movimiento = {
      desc: desc,
      monto: monto,
      saldo: saldo,
      tipo: tipo,
      fecha: fecha ?? new Date(),
      id_operation : id_operation
    };

    actions.push(mov);
    this.setActions = actions;
  }

  get getActions(): Array<Movimiento> {
    return <Array<Movimiento>>JSON.parse(sessionStorage.getItem('actions'));
  }

  get getICuentas(): Array<ICuenta> {
    return <Array<ICuenta>>JSON.parse(sessionStorage.getItem('cuentas'));
  }

  set setICuentas(value: Array<ICuenta>) {
    sessionStorage.cuentas = JSON.stringify(value);
  }

  get getContactos(): Array<Contacto> {
    return <Array<Contacto>>JSON.parse(sessionStorage.getItem('contactos'));
  }

  set setActions(value: Array<Movimiento>) {
    sessionStorage.actions = JSON.stringify(value);
  }

  get TipoMovimiento(): Array<TipoMovimiento> {
    return this.tipomov;
  }
}
