
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UsuarioProvider {

  constructor( private afDB: AngularFirestore) {
    console.log('Hello UsuarioProvider Provider');
  }

  verficarUsuario(clave:string)
  {
    clave = clave.toLowerCase();

    return  new Promise((resolve, reject)=>{
        this.afDB.doc(`/usuarios/${clave}`)
            .valueChanges().subscribe(data=>{
              console.log(data);
              resolve();
            });//estar pendiente de los cambios;
    });

  }

}
