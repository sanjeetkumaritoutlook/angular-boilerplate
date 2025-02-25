import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';
import { FormComponentComponent } from './component/form-component/form-component.component';
import { CustomerService } from './services/customer.service';
import { FirestoreService } from './services/firestore.service';
import { FormsModule } from '@angular/forms';
import { FirebaseExampleComponent } from './component/firebase-example/firebase-example.component';

@NgModule({
  declarations: [ CustomerListComponent, FormComponentComponent, FirebaseExampleComponent],
  imports: [
    FormsModule,
    CommonModule,
    CustomersRoutingModule,
    SharedComponentModule,
  ],
  providers: [CustomerService, FirestoreService]
})
export class CustomersModule { }
