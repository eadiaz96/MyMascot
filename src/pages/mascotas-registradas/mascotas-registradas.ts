import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-mascotas-registradas',
  templateUrl: 'mascotas-registradas.html',
})

export class MascotasRegistradasPage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder) {}
  saveData(){
    console.log(this.myForm.value);}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotasRegistradasPage');
  }
  public createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }
}
