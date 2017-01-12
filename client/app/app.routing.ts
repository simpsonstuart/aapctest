import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PuppiesComponent }      from './components/Puppies/Puppies.component';
import { PuppyDetailComponent }  from './components/PuppyDetail/Puppy-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: PuppyDetailComponent
  },
  {
    path: 'Puppies',
    component: PuppiesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
