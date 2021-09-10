export interface Movimiento{

    id? : number,
    desc : string,
    monto : number,
    saldo : number,
    tipo : TipoMovimiento,
    fecha : Date,
    id_operation : string
    
}

export interface TipoMovimiento{

    id : number;
    nombre : string;

}
