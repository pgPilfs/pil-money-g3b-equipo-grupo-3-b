export interface Moneda{

    tipo : string,
    descripcion? : string,
    simbolo? : string

}

export interface Contacto{

    CBU? : string,
    CVU?: string,
    alias? : string,
    titular? : string,
    entidad? : {nombre? : string,  sucursal? : string }

}

export interface Transferencia{
  
    destino? : Contacto;
    monto? : number;
    info?: { desc? : string, concepto?: Concepto, email?: string }

}

export interface Concepto{

    id? : number;
    nombre? : string;

}