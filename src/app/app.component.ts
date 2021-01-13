import { Component, OnInit, DoCheck } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'home'
    },
    {
      title: 'Photos',
      url: '/tabs/tab2',
      icon: 'images'
    },
    {
      title: 'Contacts',
      url: '/tabs/tab3',
      icon: 'people'
    },
    {
      title: 'Mail',
      url: '/tabs/tab4',
      icon: 'mail'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    });
  }
      
  ngOnInit() {
    const path = window.location.pathname;
      
    console.log('ngOnInit path : ', path)
      
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url === path);
    }
      console.log('ngOnInit selectedIndex : ', this.selectedIndex);
  }
    
    
  ngDoCheck() {
    this.checkSelected();
  }
    
  checkSelected() {
    const path = window.location.pathname;  
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url === path);
    }
  }
}

