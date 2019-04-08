import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotasRegistradasPage } from '../mascotas-registradas/mascotas-registradas';
import { NuevaMascotaPage } from '../nueva-mascota/nueva-mascota';



@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

    this.credentialsForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      NumeroCelular: ['',Validators.compose([Validators.maxLength(10),Validators.minLength(7), Validators.required])],
      password: ['',Validators.required]
    });
  }
  MascotasRegistradasPage(){
    this.navCtrl.push(MascotasRegistradasPage);}
    
    NuevaMascotaPage(){
      this.navCtrl.push(NuevaMascotaPage);}
  }

 