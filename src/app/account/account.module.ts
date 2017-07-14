import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        AccountRoutingModule
    ],
    providers: [LoginService]
})
export class AccountModule { }
