import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',

})

export class AvisosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

   
  }
}
