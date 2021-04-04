import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-doacao-pais',
  templateUrl: './info-doacao-pais.page.html',
  styleUrls: ['./info-doacao-pais.page.scss'],
})
export class InfoDoacaoPaisPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

voltar() {
  this.navCtrl.navigateBack('painel-pais');
}

}
