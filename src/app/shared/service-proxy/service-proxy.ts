import { Injectable, Inject } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenService {
    Hello(): string {
        return "123";
    }
}



@Injectable()
export class TokenAuthServiceProxy {
    private http: Http;
    private baseurl: string;

    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }

    
}



