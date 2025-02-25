import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-firebase-example',
  templateUrl: './firebase-example.component.html',
  styleUrls: ['./firebase-example.component.scss']
})
export class FirebaseExampleComponent implements OnInit {
  constructor(private fb: FormBuilder, private fireStoreService: FirestoreService) {}
  customers: any;
  customerName: string;
  customerAge: number;
  customerAddress: string;
  
  ngOnInit(): void {
    this.fireStoreService.read_Customers().subscribe(data => {

      this.customers = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.customers);

    });
  }

  CreateRecord(): void {
    let record = {};
    record['Name'] = this.customerName;
    record['Age'] = this.customerAge;
    record['Address'] = this.customerAddress;
    this.fireStoreService.create_NewCustomer(record).then(resp => {
      this.customerName = '';
      this.customerAge = undefined;
      this.customerAddress = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID): void {
    this.fireStoreService.delete_Customer(rowID);
  }

  EditRecord(record): void {
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
    record.isEdit = true;

  }

  UpdateRecord(recordRow): void {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.fireStoreService.update_Customer(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
