import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    //on recup la route active pour le parametre id / et notre photos service
  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotosService,
    private storage: Storage) { }
    
    // tableau des favoris
    fav = [];
    
    
    //on definie l'index du tableau à 0
    photoIndex = 0;
    //on declare note element pour l'utiliser dans la page details
    photoDetails = this.photoService.data[ this.photoIndex ];

    
    mettreFav(){
        this.fav.push(this.photoDetails.url);
        //console.log('yes : ', this.fav);
        this.storage.set('Mes favoris', this.fav);
        
    }
    
    supprFav(i){
        //console.log(this.photoDetails.url);
        this.fav.splice(i,1);
        this.storage.set('Mes favoris', this.fav);
    }
    
    
    async getStorage(){
        const data = await this.storage.get('Mes favoris');
        //console.log('Données recup du storage', data);
        if(data)this.fav = data;
    }
    
    
    


  ngOnInit() {
      this.activatedRoute.params.subscribe((params) => {

          //on recherche l'index du tableau correspondant à l'id récupéré en parametre
          this.photoIndex = this.photoService.data.findIndex( item => item.id == params.id );
          
          this.photoDetails = this.photoService.data[ this.photoIndex ];
          
          //recup photo
          console.log('dfsdf : ', this.photoDetails);
          
          console.log('test' ,this.photoDetails.url);
          
          
      })
      this.getStorage();
  }
    
}
