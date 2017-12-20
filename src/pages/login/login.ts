import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController , public menuCtrl:MenuController) {

    this.menuCtrl.enable(false,"sidemenu");
  }
  

  login()
  {     
    console.log("login");

    // 개발용으로 페이지 이동 할 수 있게 사이드메뉴 나올 수 있게 설정 
    
    if(!this.menuCtrl.isEnabled())
    this.menuCtrl.enable(true,"sidemenu");
    this.navCtrl.setRoot(TabsPage);
  }
}
