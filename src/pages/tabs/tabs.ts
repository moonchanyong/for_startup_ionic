import { Component, ViewChild } from '@angular/core';
import { LibraryPage } from '../library/library';
import { HomePage } from '../home/home';
import { Tab2Page } from '../tab2/tab2';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ListPage } from '../list/list';
import { Tabs } from 'ionic-angular';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  myIndex:number = 1;
  tab1Root = LibraryPage;
  tab2Root = HomePage;
  tab3Root = Tab2Page;
  list = ListPage;



  
  constructor(navParams: NavParams) {    
  
    if (navParams.data.index) this.myIndex = navParams.data.index;    
    console.log(this.myIndex)
    
    
  }

  ionViewDidEnter() {
    this.tabRef.select(this.myIndex);
   }


}
