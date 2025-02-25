import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedComponentModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
