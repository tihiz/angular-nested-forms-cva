import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-billing-component',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

public nestedForm: FormGroup = new FormGroup({
  basicInfo: new FormControl(""),
  address: new FormControl("")
});
  constructor() { }

  ngOnInit() {
  }

public onSubmit(){
  console.log("Val", this.nestedForm.value);
}
}