import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private http: Http) {

    }

    Authenticate(input: AuthenticateModel): Observable<AuthenticateResultModel> {

        const content_ = JSON.stringify(input ? input.toJSON() : null);

        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        // 看一下这个http模块的请求构建
        return this.http.request('http://localhost:22742/api/TokenAuth/Authenticate', options_)
            .map(response => response.json().result as AuthenticateResultModel);

    }
}


export class AuthenticateModel implements IAuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    twoFactorVerificationCode: string;
    rememberClient: boolean;
    twoFactorRememberClientToken: string;
    singleSignIn: boolean;
    returnUrl: string;

    constructor(data?: IAuthenticateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userNameOrEmailAddress = data["userNameOrEmailAddress"];
            this.password = data["password"];
            this.twoFactorVerificationCode = data["twoFactorVerificationCode"];
            this.rememberClient = data["rememberClient"];
            this.twoFactorRememberClientToken = data["twoFactorRememberClientToken"];
            this.singleSignIn = data["singleSignIn"];
            this.returnUrl = data["returnUrl"];
        }
    }

    static fromJS(data: any): AuthenticateModel {
        let result = new AuthenticateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
        data["password"] = this.password;
        data["twoFactorVerificationCode"] = this.twoFactorVerificationCode;
        data["rememberClient"] = this.rememberClient;
        data["twoFactorRememberClientToken"] = this.twoFactorRememberClientToken;
        data["singleSignIn"] = this.singleSignIn;
        data["returnUrl"] = this.returnUrl;
        return data;
    }
}

export interface IAuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    twoFactorVerificationCode: string;
    rememberClient: boolean;
    twoFactorRememberClientToken: string;
    singleSignIn: boolean;
    returnUrl: string;
}

export class AuthenticateResultModel implements IAuthenticateResultModel {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    shouldResetPassword: boolean;
    passwordResetCode: string;
    userId: number;
    requiresTwoFactorVerification: boolean;
    twoFactorAuthProviders: string[];
    twoFactorRememberClientToken: string;
    returnUrl: string;

    constructor(data?: IAuthenticateResultModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.shouldResetPassword = data["shouldResetPassword"];
            this.passwordResetCode = data["passwordResetCode"];
            this.userId = data["userId"];
            this.requiresTwoFactorVerification = data["requiresTwoFactorVerification"];
            if (data["twoFactorAuthProviders"] && data["twoFactorAuthProviders"].constructor === Array) {
                this.twoFactorAuthProviders = [];
                for (let item of data["twoFactorAuthProviders"])
                    this.twoFactorAuthProviders.push(item);
            }
            this.twoFactorRememberClientToken = data["twoFactorRememberClientToken"];
            this.returnUrl = data["returnUrl"];
        }
    }

    static fromJS(data: any): AuthenticateResultModel {
        let result = new AuthenticateResultModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["shouldResetPassword"] = this.shouldResetPassword;
        data["passwordResetCode"] = this.passwordResetCode;
        data["userId"] = this.userId;
        data["requiresTwoFactorVerification"] = this.requiresTwoFactorVerification;
        if (this.twoFactorAuthProviders && this.twoFactorAuthProviders.constructor === Array) {
            data["twoFactorAuthProviders"] = [];
            for (let item of this.twoFactorAuthProviders)
                data["twoFactorAuthProviders"].push(item);
        }
        data["twoFactorRememberClientToken"] = this.twoFactorRememberClientToken;
        data["returnUrl"] = this.returnUrl;
        return data;
    }
}

export interface IAuthenticateResultModel {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    shouldResetPassword: boolean;
    passwordResetCode: string;
    userId: number;
    requiresTwoFactorVerification: boolean;
    twoFactorAuthProviders: string[];
    twoFactorRememberClientToken: string;
    returnUrl: string;
}
