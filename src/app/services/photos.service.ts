import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
    
  public data = [
    {
        id: 12,
        url: '../../assets/photos/forêt.png',
        title: 'Forêt',
        auteur: 'Jean de La Forêt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 17,
        url: '../../assets/photos/jardin.png',
        title: 'aucune idée',
        auteur: 'Inconnue',
        description: 'Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 26,
        url: '../../assets/photos/jardin-jap.jpg',
        title: 'Jardin japonais',
        auteur: 'Un japonais',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 7,
        url: '../../assets/photos/lac.jpg',
        title: 'lac',
        auteur: 'Un marin',
        description: 'Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 12,
        url: '../../assets/photos/forêt.png',
        title: 'Forêt',
        auteur: 'Jean de La Forêt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 17,
        url: '../../assets/photos/jardin.png',
        title: 'aucune idée',
        auteur: 'Inconnue',
        description: 'Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 26,
        url: '../../assets/photos/jardin-jap.jpg',
        title: 'Jardin japonais',
        auteur: 'Un japonais',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    },
    {
        id: 7,
        url: '../../assets/photos/lac.jpg',
        title: 'lac',
        auteur: 'Un marin',
        description: 'Etiam in arcu non ex blandit rutrum. Proin arcu lorem, euismod eu dui non, finibus aliquet quam. Maecenas eu velit mollis, scelerisque purus ut, luctus arcu. Mauris maximus ante ut nunc congue varius. Nam elementum, felis ut vulputate fringilla, lorem massa sollicitudin magna, eget maximus ligula neque sit amet lorem. Curabitur orci dolor, tempor nec venenatis ac, vulputate sed sem. Mauris sodales felis nunc, ut efficitur lacus pulvinar vel. Suspendisse condimentum dui nulla, efficitur fringilla elit sagittis consectetur. Phasellus sodales venenatis maximus. Morbi sodales urna vel ullamcorper suscipit. Phasellus euismod neque neque.'
    }
      
  ];

  constructor() { }
}
