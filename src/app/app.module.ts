import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { TransferComponent } from './operations/transfer/transfer.component';
import { RetirosComponent } from './retiros/retiros.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { FacturasComponent } from './facturas/facturas.component';
import { GroupOperationsComponent } from './group-operations/group-operations.component';
import { HeaderComponent } from './header/header.component';

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
    CotizacionesComponent,
    FacturasComponent,
    GroupOperationsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatIconModule,
    AppRoutingModule,
    NoopAnimationsModule,
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
      { path: 'retiros', component: RetirosComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'services', component: ServiciosComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LandingComponent },
      { path: 'retiros', component: RetirosComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
