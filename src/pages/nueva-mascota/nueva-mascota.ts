import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-nueva-mascota',
  templateUrl: 'nueva-mascota.html',
})
export class NuevaMascotaPage {

  nuevamascota: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder
            )
  {           
    this.nuevamascota = this.formBuilder.group({
       email: [''],
       password: ['']});}

}