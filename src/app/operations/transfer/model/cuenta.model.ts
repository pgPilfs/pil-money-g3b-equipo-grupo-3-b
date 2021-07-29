import { Contacto, Moneda, Transferencia } from "./interfaces";

abstract class Cuenta{
    
    private id : string;
    private contacto : Contacto;
    private saldo : number;
    private moneda : Moneda;

    constructor(id : string, contacto : Contacto, saldo : number, moneda? : Moneda){
     
        this.id = id;
        this.contacto = contacto;
        this.saldo = saldo;
        this.moneda = moneda ?? { tipo : "pesos", descripcion : "pesos argentino", simbolo: "$"};
        
    }

    abstract Transferir(transfer : Transferencia) : void
    /*
    abstract Extraer() : void
    abstract Depositar() : void
    */

    get Id(): string {
        return this.id;
    }

    get Contacto(): Contacto {
        return this.contacto;
    }

    get Moneda(): Moneda {
        return this.moneda;
    }
  
    get Saldo(): number {
        return this.saldo;
    }
    set Saldo(value: number) {
        this.saldo = value;
    }
    

}

export default Cuenta;
