import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage implements OnInit {


  constructor(private navCtrl : NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.navigateBack('home');
  }

  async cadastrarAluno() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Obrigado por se cadastrar!',
      subHeader: 'Seu cadastro foi realizado com sucesso.',
      message: 'Acompanhe suas doações recebidas.',
      buttons: [
        {
            text: 'OK',
            handler: () => {
                alert.dismiss();
                return false;
            }
        }
    ]
  });

  await alert.present();
  await alert.onDidDismiss().then(() => {
    this.navCtrl.navigateRoot(['home']);
  });
}


}
