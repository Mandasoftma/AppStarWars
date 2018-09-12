import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ModalController } from 'ionic-angular';
import { SwebProvider } from '../../providers/sweb/sweb';
import { InfoPage } from '../../pages/info/info'
import { HomePage } from '../../pages/home/home'

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {
  public regVehicles:any=[];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public Provedor:SwebProvider,
      private alertCtrl: AlertController,
      private ModalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclesPage');
    this.getAllVehicles()
  }

  getAllVehicles(){
    this.Provedor.GetAllVehicles()
    .subscribe(
      (data)=>{
        if(Object.keys(data).length === 0){
            this.FunShowMsj("Error al intentar listar los filmes!","Información","No se encontraron registros para listar.")
        }else{
          this.regVehicles = data;
          this.regVehicles = Array.of(this.regVehicles);
        }
      },
      (error)=>{
        this.FunShowMsj("Error al intentar listar los filmes!","Información","Algo salio mal asegurate de estar conectado a internet")
      }
    )
  }

  onModalPage(vtitle:string,vsubTitle:string,vmessage:any){    
    const myInfo ={
      title: vtitle,
      subTitle: vsubTitle,
      message: vmessage,
      buttons: ['Ok']
    }
    const pageModal = this.ModalCtrl.create(InfoPage,{Reg:myInfo})
    pageModal.present();
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
