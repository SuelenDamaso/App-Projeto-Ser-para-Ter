import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformaçõesPage } from '../informa\u00E7\u00F5es/informa\u00E7\u00F5es';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  rootPage = InformaçõesPage;
  
    
  constructor(public navCtrl: NavController) {

  }
  goToInfo(){
    this.navCtrl.push(InformaçõesPage)
  }


}
