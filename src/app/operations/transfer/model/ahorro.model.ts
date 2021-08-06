import Cuenta from './cuenta.model';
import { Contacto, Moneda, Transferencia } from './interfaces';

class CuentaAhorro extends Cuenta {
  constructor(id: string, contacto: Contacto, saldo: number, moneda?: Moneda) {
      super(id, contacto, saldo, moneda);
  }

  Transferir(transfer: Transferencia): void {
    this.Saldo -= transfer.monto;
  }

}

export default CuentaAhorro;
