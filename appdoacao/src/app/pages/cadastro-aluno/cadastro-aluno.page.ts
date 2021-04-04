import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.navigateBack('home');
  }

}
