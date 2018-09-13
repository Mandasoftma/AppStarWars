import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
      private platform: Platform,
      private statusBar: StatusBar,
      private splashScreen: SplashScreen,
      private oneSignal: OneSignal,
      private alertCtrl: AlertController  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.handlerNotifications();
    });
  }

  private handlerNotifications(){
    this.oneSignal.startInit('b4354a95-7d05-42f3-9f98-70e837f536e2', '871893499303');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
    .subscribe(jsonData => {
      let alert = this.alertCtrl.create({
        title: jsonData.notification.payload.title,
        subTitle: jsonData.notification.payload.body,
        buttons: ['OK']
      });
      alert.present();
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
    this.oneSignal.endInit();
    }
}
