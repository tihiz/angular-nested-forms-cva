import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup,FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressInfoComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressInfoComponent),
      multi: true
    }
  ]
})
export class AddressInfoComponent implements OnInit, ControlValueAccessor, Validator {

public addressForm: FormGroup = new FormGroup({
  addressLine: new FormControl("",[Validators.required]),
  areacode: new FormControl('', [Validators.required, Validators.maxLength(5)])
});
  constructor() { }

  ngOnInit() {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.addressForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    console.log("ADress validation");
    return this.addressForm.valid ? null : { invalidForm: {valid: false, message: "Address fields are invalid"}};
  }
}