import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-predict-component',
  templateUrl: './predict-component.component.html',
  styleUrls: ['./predict-component.component.scss']
})
export class PredictComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // Attributes
  customer: Customer | undefined;

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

  // predict function
  async predict() {
    // init object with data from form
  //   this.customer = {
  //     name: this.name.value,
  //     address: this.address.value,
  //   };
  //   await this.storeServie.create(this.store).then(
  //     store => this.router.navigate(['/stores'])
  //   );
  }



}
