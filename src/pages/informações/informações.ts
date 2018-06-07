import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ColaboradorPage } from '../colaborador/colaborador';
import { ContatoPage } from '../contato/contato';

@IonicPage()
@Component({
  selector: 'page-informações',
  templateUrl: 'informações.html',
})
export class InformaçõesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformaçõesPage');
  }
  goToColaborar(){
    this.navCtrl.push(ColaboradorPage)
  }
  goToContato(){
    this.navCtrl.push(ContatoPage)
  }
  openUrl(){ window.open('https://www.facebook.com/plenitude.sorocaba.50', '_system'); }

}
