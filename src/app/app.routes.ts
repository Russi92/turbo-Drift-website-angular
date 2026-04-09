import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Service } from './components/service/service';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { ContactUs } from './components/contact-us/contact-us';
import { About } from './components/about/about';
import { Cars } from './components/cars/cars';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path : '' , redirectTo : 'home' , pathMatch:'full'},
    {path : 'home' , component : Home},
    {path : 'service' , component : Service},
    {path : 'cars', component : Cars},
    {path : 'about', component : About},
    {path : 'contactUs', component : ContactUs},
    {path : 'logIn', component : Login},
    {path : 'register' , component : Register},
    {path : '**', component : NotFound}
];
