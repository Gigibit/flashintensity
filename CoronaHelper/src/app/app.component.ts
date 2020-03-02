import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateService: TranslateService,
    private globalization: Globalization
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('init')
      this.globalization.getPreferredLanguage().then(language=>{
        this.translateService.setDefaultLang(language.value.split('-')[0])
        this.translateService.use(language.value.split('-')[0])
        console.log(language.value.split('-')[0])
      }).catch((e)=>console.log(e))
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
