import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { AddBus } from './add-bus/add-bus';
import { ViewBus } from './view-bus/view-bus';
import { EditBus } from './edit-bus/edit-bus';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About Us' },
  { path: 'bus', component: AddBus, title: 'Add Bus' },
  { path: 'viewbus', component: ViewBus, title: 'View Buses' },
  { path: 'edit-bus/:id', component: EditBus, title: 'Edit Bus' },
  { path: '**', redirectTo: '' }
];