import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';
import{MyFormComponent} from './my-form/my-form.component';
import{MyFormDialogComponent} from './my-form-dialog/my-form-dialog.component';
import {MenuComponent} from './core/menu/menu.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HeroTopComponent},
  {path: AppConfig.routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  {path: AppConfig.routes.myform,component:MyFormComponent},
  {path:AppConfig.routes.menu,component:MenuComponent},
  {path: AppConfig.routes.error404, component: Error404Component},


  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
