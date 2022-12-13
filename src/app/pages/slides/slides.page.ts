import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: {img: string, titulo: string, desc: string }[] =[
    {
      img: '/assets/slides/image-photo-svgrepo-com.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increibles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-svgrepo-com.svg',
      titulo: 'Escucha Musica',
      desc: 'Toda tu musica favorita esta aqui'
    },

    {
      img: '/assets/slides/calendar-svgrepo-com.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposicion'
    },

    {
      img: '/assets/slides/placeholder-svgrepo-com.svg',
      titulo: 'Tu ubicacion',
      desc: 'Siempre sabemos donde estas'
    }


  ];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.navigateBack('/');

  }

}
