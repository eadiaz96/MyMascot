import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MascotasRegistradasPage } from './mascotas-registradas';

@NgModule({
  declarations: [
    MascotasRegistradasPage,
  ],
  imports: [
    IonicPageModule.forChild(MascotasRegistradasPage),
  ],
})
export class MascotasRegistradasPageModule {}
