import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { AuthGuard } from './auth/auth.guard';
import { DealsDetailsComponent } from './deals-details/deals-details.component';
import { PaymentComponent } from './payment/payment.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    // Add this to guard this route
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'dealsdetails/:id',
    component: DealsDetailsComponent,
    
  },
  {
    path: 'buy',
    component: PaymentComponent,
    
  },
  {
    path: 'Home',
    component: AppComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }