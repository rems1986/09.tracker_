import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import {UsuarioProvider} from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController
    , public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl:LoadingController
    , private _usuarioProv:UsuarioProvider) {
  }

  ionViewDidLoad() {
    this.slides.paginationType='progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode=false;
    console.log('ionViewDidLoad LoginPage');
  }

  mostrarAlert()
  {
      let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log(data);
            this.verificarUsuario(data.username);
          }

        }
      ]
    });
    alert.present();

  }

  verificarUsuario(clave:string)
  {
    console.log(clave);
    let loading = this.loadingCtrl.create({
      content:'verificando'
    });
    loading.present();

    this._usuarioProv.verficarUsuario(clave)
        .then()
        .catch()
/*
    setTimeout(()=>{
      loading.dismiss();
    },3000);
    */
  }



}
