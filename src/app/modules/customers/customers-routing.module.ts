import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { FormComponentComponent } from './component/form-component/form-component.component';
import { FirebaseExampleComponent } from './component/firebase-example/firebase-example.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'form-example', component: FormComponentComponent },
  { path: 'firebase-example', component: FirebaseExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
