import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Result } from '../models/result.model';

@Component({
  selector: 'app-predict-component',
  templateUrl: './predict-component.component.html',
  styleUrls: ['./predict-component.component.scss']
})
export class PredictComponentComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }


  // Attributes
  customer: Customer | undefined;
  result: Result | undefined;

  // Form groupe add store
  predictForm: FormGroup = new FormGroup({
    gender: new FormControl('', [Validators.required]),
    seniorCitizen: new FormControl('', [Validators.required]),
    partner: new FormControl('', [Validators.required]),
    dependents: new FormControl('', [Validators.required]),
    tenure: new FormControl('', [Validators.required]),
    phoneService: new FormControl('', [Validators.required]),
    multipleLines: new FormControl('', [Validators.required]),
    internetService: new FormControl('', [Validators.required]),
    onlineSecurity: new FormControl('', [Validators.required]),
    onlineBackup: new FormControl('', [Validators.required]),
    deviceProtection: new FormControl('', [Validators.required]),
    techSupport: new FormControl('', [Validators.required]),
    streamingTv: new FormControl('', [Validators.required]),
    streamingMovies: new FormControl('', [Validators.required]),
    contract: new FormControl('', [Validators.required]),
    paperlessBilling: new FormControl('', [Validators.required]),
    paymentMethod: new FormControl('', [Validators.required]),
    monthlyCharges: new FormControl('', [Validators.required]),
    totalesCharges: new FormControl('', [Validators.required]),
  });



  // getters
  get gender() {
    return this.predictForm.get('gender');
  }
  get seniorCitizen() {
    return this.predictForm.get('seniorCitizen');
  }
  get partner() {
    return this.predictForm.get('partner');
  }
  get dependents() {
    return this.predictForm.get('dependents');
  }
  get tenure() {
    return this.predictForm.get('tenure');
  }
  get phoneService() {
    return this.predictForm.get('phoneService');
  }
  get multipleLines() {
    return this.predictForm.get('multipleLines');
  }
  get internetService() {
    return this.predictForm.get('internetService');
  }
  get onlineSecurity() {
    return this.predictForm.get('onlineSecurity');
  }
  get onlineBackup() {
    return this.predictForm.get('onlineBackup');
  }
  get deviceProtection() {
    return this.predictForm.get('deviceProtection');
  }
  get techSupport() {
    return this.predictForm.get('techSupport');
  }
  get streamingTv() {
    return this.predictForm.get('streamingTv');
  }
  get streamingMovies() {
    return this.predictForm.get('streamingMovies');
  }
  get contract() {
    return this.predictForm.get('contract');
  }
  get paperlessBilling() {
    return this.predictForm.get('paperlessBilling');
  }
  get paymentMethod() {
    return this.predictForm.get('paymentMethod');
  }
  get monthlyCharges() {
    return this.predictForm.get('monthlyCharges');
  }
  get totalesCharges() {
    return this.predictForm.get('totalesCharges');
  }

  // predict function
  async predict() {
  //init object with data from form
    this.customer = {
      gender: this.gender ? this.gender.value : null,
      senior_citizen: this.seniorCitizen ? this.seniorCitizen.value : null,
      partner: this.partner ? this.partner.value : null,
      dependents: this.dependents ? this.dependents.value : null,
      tenure: this.tenure ? this.tenure.value : null,
      phone_service: this.phoneService ? this.phoneService.value : null,
      multiple_lines: this.multipleLines ? this.multipleLines.value : null,
      internet_service: this.internetService ? this.internetService.value : null,
      online_security: this.onlineSecurity ? this.onlineSecurity.value : null,
      online_backup: this.onlineBackup ? this.onlineBackup.value : null,
      device_protection: this.deviceProtection ? this.deviceProtection.value : null,
      tech_support: this.techSupport ? this.techSupport.value : null,
      streaming_tv: this.streamingTv ? this.streamingTv.value : null,
      streaming_movies: this.streamingMovies ? this.streamingMovies.value : null,
      contract: this.contract ? this.contract.value : null,
      paperless_billing: this.paperlessBilling ? this.paperlessBilling.value : null,
      payment_method: this.paymentMethod ? this.paymentMethod.value : null,
      monthly_charges: this.monthlyCharges ? this.monthlyCharges.value : null,
      totales_charges: this.totalesCharges ? this.totalesCharges.value : null,
    };

    await this.customerService.predict(this.customer).then(
      result => this.result = result
    );
  }



}
