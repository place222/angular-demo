import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditComponent } from './audit/audit.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail.component';
import { AppRouteGuard } from '../shared/auth/auth-guard';

const routes: Routes = [
    {
        path: 'admin', component: DashboardComponent, canActivate: [AppRouteGuard], canActivateChild: [AppRouteGuard], children: [
            { path: 'audit', component: AuditComponent },
            { path: 'index', component: DashboardDetailComponent },
            { path: '', redirectTo: 'index', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
