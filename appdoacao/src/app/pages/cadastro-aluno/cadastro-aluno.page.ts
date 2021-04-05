import { ApiService } from './../../services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage implements OnInit {


  constructor(private navCtrl: NavController, public alertCtrl: AlertController, private apiService: ApiService) {
    //this.readData();
    this.createData();
  }

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

  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }

  createData() {
    const data: any = {
      "email": "rafaelfrias@gmail.com",
      "endereco": "Rua Joaquim de Santana 309",
      "id": 2,
      "nome": "Rafael Frias",
      "telefone": "13997762148"
    };

    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    });
  }

}
