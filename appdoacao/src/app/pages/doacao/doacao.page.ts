import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoModel } from 'src/app/pages/models/aluno.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ResponsavelModel } from 'src/app/pages/models/responsavel.model';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})

export class DoacaoPage implements OnInit {

  data: any;
  aluno: AlunoModel;
  listaResponsaveis: ResponsavelModel[];
  responsavel: ResponsavelModel;
  headers: HttpHeaders;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute) {
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Content-Type', 'application/json')
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      
      if (params && params.special){
        this.data = JSON.parse(params.special);
        this.aluno = this.data;

        this.getResponsavelAluno().subscribe(res => {
          this.listaResponsaveis = res.data;
          if(res.data.length > 0){
            this.listaResponsaveis.forEach(resp => {
              if(resp.id == this.aluno.id_responsavel){
                this.responsavel = resp;
              }
            });
          }
        })

      }
    })
  }

  voltar() {
    this.navCtrl.navigateRoot(['lista-doacoes']);
  }

  getResponsavelAluno(): Observable<any> {
    return this.http.get<any>("https://run.mocky.io/v3/ab5ef037-a28f-4794-8719-247503f5762f", { headers: this.headers })
    .pipe(take(1));
  }
}