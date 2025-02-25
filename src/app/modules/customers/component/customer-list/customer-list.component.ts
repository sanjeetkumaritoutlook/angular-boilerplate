import { OnInit, Component, ViewChild, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { LoadingIndicatorService } from 'src/app/shared-component/loading-indicator/loading-indicator.service';
import { CustomerService } from './../../services/customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/interfaces/customer';
import { customerTableCol } from 'src/app/constants/constant';
import { BrowserLoggerService } from 'src/app/core/services/browser-logger.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  constructor(private loadingIndicatorService: LoadingIndicatorService,
              public customerService: CustomerService,
              private browserLogger: BrowserLoggerService) { }
  displayTable = false;
  ELEMENT_DATA: Customer[] = [];
  displayedColumns: string[] = customerTableCol;
  dataSource = new MatTableDataSource<Customer>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.customerService.getCustomersList()
    .pipe()
    .subscribe((res: Customer[]) => {
      if (res) {
        setTimeout(() => {
          this.ELEMENT_DATA = res;
          this.dataSource = new MatTableDataSource<Customer>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
          this.loadingIndicatorService.hideLoadingIndicator();
        }, 3000);
      }
    }, error => {
      this.browserLogger.error(error);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
