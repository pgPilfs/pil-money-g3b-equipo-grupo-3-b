import Cuenta from "./cuenta.model";
import { Contacto, Transferencia } from "./interfaces";

class CuentaAhorro extends Cuenta{
    
    constructor(id : string, contacto : Contacto, saldo : number){
        super(id, contacto, saldo);
    }

    Transferir(transfer : Transferencia): void {

        this.Saldo -= transfer.monto;
        console.log(this.Saldo);
        // realizar transacción en la base de datos ...
        // Insertar registro a la tabla Transferencia
     
    }

}

export default CuentaAhorro;