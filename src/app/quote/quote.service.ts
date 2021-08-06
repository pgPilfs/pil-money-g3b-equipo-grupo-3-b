import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { pluck, map, finalize } from "rxjs/operators";

@Injectable()
export class CotizaciónService {

    process : boolean = true;
   
    constructor(private http: HttpClient) { }

    getDataTest(){
               
        return this.http.get("api/all").pipe(
            finalize(() => this.process = false),
            pluck("valores","cotizador"),
            map((datas : any) => Object.values(datas)))
        }
       
}