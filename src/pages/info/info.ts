import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  public Reg;
  public info:any=[];
  constructor(public ViewCtrl: ViewController, public navParams: NavParams) {
    this.Reg = navParams.get("Reg");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  
  CerrarModal(){
    this.ViewCtrl.dismiss();
  }

}
