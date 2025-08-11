import {Routes} from '@angular/router';
import {FranchiseFormComponent} from './franchises/form/form';
import {FranchiseListComponent} from './franchises/list/list';

export const adminRoutes: Routes = [
  {path: 'franchises', component: FranchiseListComponent},
  {path: 'franchises/new', component: FranchiseFormComponent},
  {path: 'franchises/:id/edit', component: FranchiseFormComponent},
];
