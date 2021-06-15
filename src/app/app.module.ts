import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActionsComponent } from './actions/actions.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ActionsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule.forRoot([
      { path: 'actions', component: ActionsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent },
      { path: '', component: LoginComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
