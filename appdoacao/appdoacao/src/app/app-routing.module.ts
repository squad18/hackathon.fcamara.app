import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-aluno',
    loadChildren: () => import('./fluxo-responsavel/cadastro-aluno/cadastro-aluno.module').then( m => m.CadastroAlunoPageModule)
  },
  {
    path: 'painel-pais',
    loadChildren: () => import('./fluxo-responsavel/painel-pais/painel-pais.module').then( m => m.PainelPaisPageModule)
  },
  {
    path: 'info-doacao-pais',
    loadChildren: () => import('./fluxo-responsavel/info-doacao-pais/info-doacao-pais.module').then( m => m.InfoDoacaoPaisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
