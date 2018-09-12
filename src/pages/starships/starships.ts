import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ModalController } from 'ionic-angular';
import { SwebProvider } from '../../providers/sweb/sweb';
import { InfoPage } from '../../pages/info/info'
import { HomePage } from '../../pages/home/home'


@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {
  public regStarships:any=[];

  constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public Provedor:SwebProvider,
        private alertCtrl: AlertController,
        private ModalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarshipsPage');
    this.getAllStarships()
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

  getAllStarships(){
    this.Provedor.GetAllStarships()
    .subscribe(
      (data)=>{
        if(Object.keys(data).length === 0){
            this.FunShowMsj("Error al intentar listar los filmes!","Información","No se encontraron registros para listar.")
        }else{
          this.regStarships = data;
          this.regStarships = Array.of(this.regStarships);
        }
      },
      (error)=>{
        this.FunShowMsj("Error al intentar listar los filmes!","Información","Algo salio mal asegurate de estar conectado a internet")
      }
    )
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

  CerrarPage(){
    this.navCtrl.setRoot(HomePage);
  }
}
