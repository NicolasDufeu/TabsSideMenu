import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private menu: MenuController,
    private storage: Storage

    ) { }
    
    valeur = []; 
    
    openMenu(){
        this.menu.open();
        
    }
    
    favoris(){
        this.storage.get('Mes favoris').then ((val) =>{
           this.valeur = val;
           console.log('les fav ',this.valeur);
       })
    }

    
    
    ngOnInit(){
        this.favoris();
    }
    
    ionViewWillEnter(){
        this.favoris();
    }
}
