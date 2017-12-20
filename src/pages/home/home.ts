import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  // 라이프 사이클 angular에서는 ngAfterViewInit()
  ionViewDidLoad() {
    // style 고치기 
    document.getElementById("b1").style.height = "10%";
    console.log("check");
  }









}
