import { Contacto, Moneda } from "./interfaces";

export interface ICuenta{

    id : string,
    tipo : string,
    contacto : Contacto,
    saldo : number,
    moneda : Moneda
 
}
