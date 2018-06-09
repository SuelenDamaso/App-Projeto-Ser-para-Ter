import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})

export class ContatoPage {


  constructor(public navCtrl: NavController, public platform:Platform) {}

}