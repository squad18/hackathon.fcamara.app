import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../models/aluno.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  listaAlunos: AlunoModel[];
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json')
  }

  ngOnInit(){
    this.obterAlunos();
  }

  get(): Observable<string> {   
    return this.http.get<string>("https://run.mocky.io/v3/c36ce3ad-87d1-4dea-a5bc-2d0375550a58", { headers: this.headers })
    .pipe(take(1));
  }

  obterAlunos() {
    this.get().subscribe((result: any) => {
      this.listaAlunos = result.data;
    })
  }
}
