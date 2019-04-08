import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaMascotaPage } from './nueva-mascota';

@NgModule({
  declarations: [
    NuevaMascotaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaMascotaPage),
  ],
})
export class NuevaMascotaPageModule {}
