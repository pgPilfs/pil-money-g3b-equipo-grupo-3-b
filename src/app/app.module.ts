import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { BalanceComponent } from './balance/balance.component';
import { MovementsComponent } from './movements/movements.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { OperationsComponent } from './operations/operations.component';
import { ExchangeComponent } from './operations/exchange/exchange.component';
import { ActionComponent } from './operations/action/action.component';
import {
  TipoCuentaPipe,
  TransferComponent,
} from './operations/transfer/transfer.component';
import { RetirosComponent } from './retiros/retiros.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { FacturasComponent } from './facturas/facturas.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { BankAccComponent } from './retiros/bank-acc/bank-acc.component';
import { EfecPuntComponent } from './retiros/efec-punt/efec-punt.component';
import { DepositPesosComponent } from './deposit/deposit-pesos/deposit-pesos.component';
import { DepositDolaresComponent } from './deposit/deposit-dolares/deposit-dolares.component';
import { StepperComponent } from './operations/transfer/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';
import { DepositComponent } from './deposit/deposit.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AmountretirComponent } from './retiros/amountretir/amountretir.component';
import { SuccessComponent } from './retiros/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    BalanceComponent,
    MovementsComponent,
    ContactComponent,
    FaqComponent,
    FooterComponent,
    LandingComponent,
    ServiciosComponent,
    OperationsComponent,
    ExchangeComponent,
    ActionComponent,
    TransferComponent,
    RetirosComponent,
    FacturasComponent,
    HeaderComponent,
    LeftNavBarComponent,
    BankAccComponent,
    EfecPuntComponent,
    DepositDolaresComponent,
    DepositPesosComponent,
    StepperComponent,
    TipoCuentaPipe,
    DepositComponent,
    AmountretirComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatIconModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: 'operations',
        component: OperationsComponent,
        children: [
          { path: 'transfer', component: TransferComponent },
          { path: 'exchange', component: ExchangeComponent },
          { path: 'action', component: ActionComponent },
        ],
      },
      { path: 'retiros', component: RetirosComponent,
      },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'services', component: ServiciosComponent },
      { path: 'faq', component: FaqComponent },
      { path: '', component: LandingComponent },
      { path: 'retiros/amountretir', component: AmountretirComponent },
      { path: 'retiros/success', component: SuccessComponent },
    ]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
