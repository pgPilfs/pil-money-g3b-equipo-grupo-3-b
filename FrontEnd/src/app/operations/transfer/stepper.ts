import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper } from '@angular/cdk/stepper';
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stepper',
  template: "<ng-container [ngTemplateOutlet]='stepper.selected ? stepper.selected.content : null'></ng-container>",
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends CdkStepper {

  stepper : CdkStepper = this;

  constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>) {
    super(dir, changeDetectorRef, elementRef, {});    
  }

}
