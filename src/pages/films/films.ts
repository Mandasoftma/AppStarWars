import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ModalController } from 'ionic-angular';
import { SwebProvider } from '../../providers/sweb/sweb';
import { InfoPage } from '../../pages/info/info'
import { HomePage } from '../../pages/home/home'


@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  public regfilms:any=[];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public Provedor:SwebProvider,
      private alertCtrl: AlertController,
      private ModalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
    this.getAllFilms()
  }

  onModalPage(vtitle:string,vsubTitle:string,vmessage:any){
    console.log("title ",vtitle)
    console.log("message ",vmessage)
    
    const myInfo ={
      title: vtitle,
      subTitle: vsubTitle,
      message: vmessage,
      buttons: ['Ok']
    }
   const pageModal = this.ModalCtrl.create(InfoPage,{Reg:myInfo})
   pageModal.present();
  }

  
getAllFilms(){
   this.Provedor.GetAllFilms()
  .subscribe(
    (data)=>{
      if(Object.keys(data).length === 0){
          this.FunShowMsj("Error al intentar listar los filmes!","Información","No se encontraron registros para listar.")
      }else{
        this.regfilms = data;
        this.regfilms = Array.of(this.regfilms);
      }
    },
    (error)=>{
      this.FunShowMsj("Error al intentar listar los filmes!","Información","Algo salio mal asegurate de estar conectado a internet")
    }
  )
}

getQuery(vtitle:string,vsubTitle:string,url:string){
  this.Provedor.GetQuery(url)
  .subscribe(
    (data)=>{
      if(Object.keys(data).length === 0){
          this.FunShowMsj("Error al intentar listar los filmes!","Información","No se encontraron registros para listar.")
      }else{ 
       var msg ='Name: ' + data["name"] + '\r\nhair color: '+ data["hair_color"] + '\r\nskin color: ' + data["skin_color"] + '\r\neye color: ' + data["eye_color"] + '\r\nbirth year: ' + data["birth_year"]
        this.onModalPage(vtitle,vsubTitle,msg)
      }
    },
    (error)=>{
      this.FunShowMsj("Error al intentar listar los filmes!","Información","Algo salio mal asegurate de estar conectado a internet")
    }
  )
}

CerrarPage(){
  this.navCtrl.setRoot(HomePage);
}

FunShowMsj(vtitle:string,vsubTitle:string,vmessage:string){
  const alert = this.alertCtrl.create({
        title: vtitle,
        subTitle: vsubTitle,
        message: vmessage,
        buttons: ['Ok']
  });
  alert.present()
}

}
