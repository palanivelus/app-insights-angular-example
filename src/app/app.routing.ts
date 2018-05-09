import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: 'path1', component: HomeComponent },
  { path: 'path2', component: AboutComponent},
  { path: 'path3', component: HomeComponent },
  { path: 'path4', component: AboutComponent},
  { path: 'path5', component: HomeComponent },
  { path: 'path6', component: AboutComponent},
  { path: 'path7', component: HomeComponent },
  { path: 'path8', component: AboutComponent},
  { path: 'path9', component: HomeComponent },
  { path: 'path10', component: AboutComponent},
];


export const routing = RouterModule.forRoot(routes);
