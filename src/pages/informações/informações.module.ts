import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformaçõesPage } from './informações';

@NgModule({
  declarations: [
    InformaçõesPage,
  ],
  imports: [
    IonicPageModule.forChild(InformaçõesPage),
  ],
})
export class InformaçõesPageModule {}
