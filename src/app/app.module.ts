import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, BillingInfoComponent, BasicInfoComponent, AddressInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
