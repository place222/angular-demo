import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditComponent } from './audit/audit.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail.component';
import { AuditService } from './audit/audit.service';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardDetailComponent,
        AuditComponent
    ],
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    providers: [AuditService]
})
export class AdminModule { }
