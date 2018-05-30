import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import { Database } from '@firebase/database';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';

import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject'; 


@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
 
})

export class AvisosPage {
  
  constructor(
    public navCtrl: NavController,
    db: AngularFireDatabase,
    private firebase: Firebase,
    public navParams: NavParams) {


    var bigOne = document.getElementById('bigOne');
    var dbRef = Firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AvisosPage');
  }

}
