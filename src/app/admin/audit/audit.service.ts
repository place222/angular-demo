import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import * as moment from 'moment';

@Injectable()
export class AuditService {
    constructor(private http: Http) { }

    GetAuditLogs(): Observable<PagedResultDtoOfAuditLogListDto> {

        const content_ = "";

        let options_ = {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        let url_ = 'http://localhost:22742/api/services/app/AuditLog/GetAuditLogs?';
        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetAuditLogs(response_);
        }).catch((response_) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAuditLogs(response_);

                } catch (e) {
                    return <Observable<PagedResultDtoOfAuditLogListDto>>Observable.throw(e);
                }
            } else {
                return <Observable<PagedResultDtoOfAuditLogListDto>>Observable.throw(response_);
            }
        });
    }

    protected processGetAuditLogs(response: Response): Observable<PagedResultDtoOfAuditLogListDto> {
        if (response.status == 200) {
            const responseText = response.text();
            let result200: PagedResultDtoOfAuditLogListDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText);
            result200 = resultData200 ? PagedResultDtoOfAuditLogListDto.fromJS(resultData200) : new PagedResultDtoOfAuditLogListDto();
            return Observable.of(result200);
        } else if (response.status !== 200 && response.status !== 204) {
            const responseText = response.text();
            //return throwException('An unexpected server error occurred', status, responseText);
        }
        return Observable.of<PagedResultDtoOfAuditLogListDto>(null);
    }
}


export class PagedResultDtoOfAuditLogListDto implements IPagedResultDtoOfAuditLogListDto {
    totalCount: number;
    items: AuditLogListDto[];

    constructor(data?: IPagedResultDtoOfAuditLogListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(AuditLogListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfAuditLogListDto {
        let result = new PagedResultDtoOfAuditLogListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfAuditLogListDto {
    totalCount: number;
    items: AuditLogListDto[];
}

export class AuditLogListDto implements IAuditLogListDto {
    userId: number;
    userName: string;
    impersonatorTenantId: number;
    impersonatorUserId: number;
    serviceName: string;
    methodName: string;
    parameters: string;
    executionTime: moment.Moment;
    executionDuration: number;
    clientIpAddress: string;
    clientName: string;
    browserInfo: string;
    exception: string;
    customData: string;
    id: number;

    constructor(data?: IAuditLogListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.userName = data["userName"];
            this.impersonatorTenantId = data["impersonatorTenantId"];
            this.impersonatorUserId = data["impersonatorUserId"];
            this.serviceName = data["serviceName"];
            this.methodName = data["methodName"];
            this.parameters = data["parameters"];
            this.executionTime = data["executionTime"] ? moment(data["executionTime"].toString()) : <any>undefined;
            this.executionDuration = data["executionDuration"];
            this.clientIpAddress = data["clientIpAddress"];
            this.clientName = data["clientName"];
            this.browserInfo = data["browserInfo"];
            this.exception = data["exception"];
            this.customData = data["customData"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): AuditLogListDto {
        let result = new AuditLogListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["userName"] = this.userName;
        data["impersonatorTenantId"] = this.impersonatorTenantId;
        data["impersonatorUserId"] = this.impersonatorUserId;
        data["serviceName"] = this.serviceName;
        data["methodName"] = this.methodName;
        data["parameters"] = this.parameters;
        data["executionTime"] = this.executionTime ? this.executionTime.toISOString() : <any>undefined;
        data["executionDuration"] = this.executionDuration;
        data["clientIpAddress"] = this.clientIpAddress;
        data["clientName"] = this.clientName;
        data["browserInfo"] = this.browserInfo;
        data["exception"] = this.exception;
        data["customData"] = this.customData;
        data["id"] = this.id;
        return data; 
    }
}

export interface IAuditLogListDto {
    userId: number;
    userName: string;
    impersonatorTenantId: number;
    impersonatorUserId: number;
    serviceName: string;
    methodName: string;
    parameters: string;
    executionTime: moment.Moment;
    executionDuration: number;
    clientIpAddress: string;
    clientName: string;
    browserInfo: string;
    exception: string;
    customData: string;
    id: number;
}