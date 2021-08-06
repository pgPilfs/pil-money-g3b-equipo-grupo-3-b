import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { zip } from "rxjs";
import { concatMap, finalize, map, mergeMap, pluck } from "rxjs/operators";

@Injectable()
export class CotizaciónService {

    constructor(private http: HttpClient) { }

    getDolar(){

        const dolar = this.http.get("api/dolaroficial");
        const variacion = this.http.get("api/all")
        .pipe(pluck("valores","valores_principales","casa349", "variacion"),
              map((res : any) => <number>res._text.replace(",",".")));

        return zip(dolar, variacion);
    }

}



