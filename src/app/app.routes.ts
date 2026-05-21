import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Service } from './components/service/service';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { ContactUs } from './components/contact-us/contact-us';
import { About } from './components/about/about';
import { Cars } from './components/cars/cars';
import { NotFound } from './components/not-found/not-found';
import { NewCars } from './components/new-cars/new-cars';
import { UsedCars } from './components/used-cars/used-cars';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { TotalPriceCar } from './components/total-price-car/total-price-car';
import { Details } from './components/details/details';
import { Otp } from './components/otp/otp';
import { RentShow } from './components/rent-show/rent-show';
import { SoldCars } from './components/sold-cars/sold-cars';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {path : 'service', 
   children : [
    {
      path : '',
      pathMatch : 'full',
      loadComponent : () => import ('./components/service/service').then((s) => s.Service)
    },
    {
      path : 'rent-show',
      loadComponent : () => import ('./components/rent-show/rent-show').then((r) => r.RentShow)
    },
    {
      path : 'sold-cars',
      loadComponent : () => import ('./components/sold-cars/sold-cars').then((s) => s.SoldCars)
    },
    {
      path : 'car-maintenance',
      loadComponent : () => import ('./components/car-maintenance/car-maintenance').then((c) => c.CarMaintenance)
    }
  ]},

  {
    path: 'cars',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/cars/cars').then((m) => m.Cars),
      },
      {
        path: 'newCars',
        loadComponent: () => import('./components/new-cars/new-cars').then((m) => m.NewCars),
      },
      {
        path: 'usedCars', loadComponent: () => import('./components/used-cars/used-cars').then((m) => m.UsedCars)
      }
    ],
  },
  { path: 'more-details/:id', component: Details },
  { path: 'cars/newCars', component: NewCars },
  { path: 'cars/usedCars', component: UsedCars },
  { path: 'about', component: About },
  { path: 'contactUs', component: ContactUs },
  { path: 'logIn', component: Login },
  { path: 'forgotPassword', component: ForgotPassword },
  { path: 'register', component: Register },
  {path:'otp', component:Otp},
  { path: 'total-price', component: TotalPriceCar },
  { path: '**', component: NotFound },
];
