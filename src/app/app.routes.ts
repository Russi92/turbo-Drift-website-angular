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

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'service', component: Service },
  {path: 'cars',
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
        path : 'usedCars', loadComponent : () => import('./components/used-cars/used-cars').then((m) => m.UsedCars)
      }
    ],
  },
  // {path : 'cars/newCars', component : NewCars},
  // {path : 'cars/usedCars', component : UsedCars},
  { path: 'about', component: About },
  { path: 'contactUs', component: ContactUs },
  { path: 'logIn', component: Login },
  { path: 'forgotPassword', component: ForgotPassword },
  { path: 'register', component: Register },
  { path: '**', component: NotFound },
];
