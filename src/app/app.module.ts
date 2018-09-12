// import { Pro } from '@ionic/pro';
//import { NgModule, ErrorHandler,Injectable, Injector} from '@angular/core';
import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { FilmsPage } from '../pages/films/films';
import { StarshipsPage } from '../pages/starships/starships';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { InfoPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { SwebProvider } from '../providers/sweb/sweb';

//import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
// Pro.init('f60104df', {
//   appVersion: '0.0.1'
// })

// @Injectable()
// export class MyErrorHandler implements ErrorHandler {
//   ionicErrorHandler: IonicErrorHandler;

//   constructor(injector: Injector) {
//     try {
//       this.ionicErrorHandler = injector.get(IonicErrorHandler);
//     } catch(e) {
//       // Unable to get the IonicErrorHandler provider, ensure
//       // IonicErrorHandler has been added to the providers list below
//     }
//   }

//   handleError(err: any): void {
//     Pro.monitoring.handleNewError(err);
//     // Remove this if you want to disable Ionic's auto exception handling
//     // in development mode.
//     this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
//   }
// }


// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': "f60104df"
//   }
// };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FilmsPage,
    StarshipsPage,
    VehiclesPage,
    InfoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // CloudModule.forRoot(cloudSettings),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StarshipsPage,
    VehiclesPage,
    FilmsPage,
    InfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SwebProvider,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
