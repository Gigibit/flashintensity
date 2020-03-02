import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOn:boolean = false
  saveMeText: string
  constructor(
    private flashlight: Flashlight,
    private translateService: TranslateService
  ) {
    this.translateService.get('SAVE_ME').subscribe((res: string) => { // 4
      if(this.isOn)
        this.saveMeText = res; // 5
    }); // add  this
  }
  turnOn(){
    this.isOn = !this.isOn;
    this.translateService.get( this.isOn ? 'SAFE_ZONE' : 'SAVE_ME').subscribe((res: string) => { // 4
        this.saveMeText = res; // 5
    }); // add  this
    console.log(window['plugins'].flashlight);
    (!this.isOn && this.flashlight.switchOn()) || this.flashlight.switchOff();
    
  }
  changeRange(value){
    console.log(value)
  }
}
