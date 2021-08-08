import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActionService } from 'src/app/operations/action/action.service';
import { Movimiento } from './model/action.model';
import { ICuenta } from '../transfer/model/cuenta.interfaz';
import moment from 'moment';
import $ from "jquery";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  cuentas : Array<ICuenta>;
  formgroup: FormGroup;

  constructor(private fb: FormBuilder, public sa: ActionService) 
  { 
    this.cuentas = sa.getICuentas;
  }

  ngOnInit(): void {

    this.formgroup = this.fb.group({
      desde: [''],
      hasta: [''],
      tiempo: [''],
      cuenta: [''],
    }, {validators: [ DateValidator ]});

    this.formgroup.patchValue({cuenta: this.cuentas[0]})

  }

  FechaChange(e : Event){
    
    $("#hoy").prop("checked", false);
    $("#mes").prop("checked", false);
    $("#trimestre").prop("checked", false);

    this.formgroup.get("tiempo").setValue(null)
   
  }

  TiempoChange(e : Event){

    this.formgroup.get("desde").setValue("");
    this.formgroup.get("hasta").setValue("");
   
  }

  get tiempo(){
    return this.formgroup.get("tiempo").value;
  }

  get cuenta() {
    return <ICuenta>this.formgroup.get('cuenta').value;
  }

}

export const DateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const desde = control.get('desde');
  const hasta = control.get('hasta');

  if(desde.value === "" && hasta.value === "") return { fechas : true }
  return desde.value > hasta.value ? { fechas : true } : null
}

@Pipe({name: 'filtro', pure: false})
export class FilterActionPipe implements PipeTransform {
  transform(items: Movimiento[], filter: any): any {
    
    items = items.filter(item => item.id_operation === filter.id)

    if(filter.status === "VALID"){

      let desde = moment(filter.value.desde).subtract(1,"day")
      let hasta = moment(filter.value.hasta).add(1,"day")
      return items.filter(item => moment(item.fecha).isBetween(desde, hasta));

    }
    else if(filter.value.desde || filter.value.hasta){
      return null;
    }
    else{
       
      let actual = moment();
     
      switch(filter.value.tiempo){
        case "hoy":
            return items.filter(item => moment(item.fecha).isSame(actual,"date"))
          case "mes":
            return items.filter(item => moment(item.fecha).isSame(actual,"month"))
          case "trimestre":
            return items.filter(item => moment(item.fecha).isBetween(moment().subtract(3,'month'), actual.add(1,'month'), "month"));
            default:
              return items;
      }

    }

  }
}
