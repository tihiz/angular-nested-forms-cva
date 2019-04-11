import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor,FormControl, NG_VALUE_ACCESSOR,NG_VALIDATORS, FormGroup, Validator,Validators, AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
  providers: [
       {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    }
  ]
})
export class BasicInfoComponent implements OnInit, ControlValueAccessor, Validator {

public basicInfoForm: FormGroup = new FormGroup(
  {
fname: new FormControl("", [Validators.required]),
email: new FormControl("",[Validators.required])
});
  constructor() { }

  ngOnInit() {
  }

public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.basicInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.basicInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    console.log("Basic Info validation", c);
    return this.basicInfoForm.valid ? null : { invalidForm: {valid: false, message: "basicInfoForm fields are invalid"}};
  }
}