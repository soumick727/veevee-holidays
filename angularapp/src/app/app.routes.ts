import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { AddBus } from './add-bus/add-bus';
import { ViewBus } from './view-bus/view-bus';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'bus', component: AddBus },
  { path: 'viewbus', component: ViewBus }
];