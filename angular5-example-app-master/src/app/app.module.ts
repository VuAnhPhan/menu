import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {APP_CONFIG, AppConfig} from './config/app.config';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate.factory';
import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {ProgressBarService} from './core/progress-bar.service';
import {ProgressInterceptor} from './shared/interceptors/progress.interceptor';
import {TimingInterceptor} from './shared/interceptors/timing.interceptor';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyFormDialogComponent,DialogOverviewExampleDialog } from './my-form-dialog/my-form-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

//
//import{ Routes, RouterModule} from '@angular/router';
//const RoutesConfig: Routes=[
 // {path:'contacts',component:ContactsComponent},
 // {path:'detail',component:ContactDetailComponent}
//];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
        
      },
     
    },
   
    ),
    SharedModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    MatMenuModule,
    MatExpansionModule
   // RouterModule.forRoot(RoutesConfig)

  ],
  declarations: [
    AppComponent,
    HeroTopComponent,
    ContactsComponent,
    ContactDetailComponent,
    MyFormComponent,
    MyFormDialogComponent,
    DialogOverviewExampleDialog
    
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService]},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
