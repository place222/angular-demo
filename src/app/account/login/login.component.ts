import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, AuthenticateModel } from './login.service';

declare var $: any;

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginModel: AuthenticateModel;

    constructor(private router: Router, private loginService: LoginService) {
        this.loginModel = new AuthenticateModel();
    }

    ngOnInit() {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });

    }

    onSubmit() {
        this.loginService.Authenticate(this.loginModel)
            .subscribe(model => {
                this.router.navigate(['/admin']);
            });
    }
}