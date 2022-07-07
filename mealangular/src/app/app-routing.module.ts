import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { LandingComponent } from './components/landing/landing.component';
import { OrderComponent } from './components/order/order.component';
import { OrderCatererComponent } from './components/order-caterer/order-caterer.component';
import { MenuCatererComponent } from './components/menu-caterer/menu-caterer.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: LandingComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'orders-caterer', component: OrderCatererComponent },
  { path: 'menu-caterer', component: MenuCatererComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
