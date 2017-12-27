import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{MyFormComponent} from './my-form.component';

const MyFormRoutes: Routes = [
    {
      path: '',
      component: MyFormComponent,
     // children: [
       // {path: '', component: HeroListComponent},
      //  {path: ':id', component: HeroDetailComponent}
     // ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(MyFormRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class HeroRoutingModule {
  }
  