import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.adminRoutes)
  },
  {
    path: 'employees',
    loadChildren: () => import('./features/employees/employee.routes').then((e) => e.employeeRoutes)
  }
];
