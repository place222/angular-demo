import { Component, OnInit } from '@angular/core';
import { AuditService } from './audit.service';

declare var $: any;
@Component({
    templateUrl: 'audit.component.html'
})

export class AuditComponent implements OnInit {

    constructor(private auditService: AuditService) { }

    ngOnInit() {

        $('#table').bootstrapTable({
            columns: [{
                field: 'id',
                title: 'Item ID'
            }, {
                field: 'name',
                title: 'Item Name'
            }, {
                field: 'price',
                title: 'Item Price'
            }],
            data: [{
                id: 1,
                name: 'Item 1',
                price: '$1'
            }, {
                id: 2,
                name: 'Item 2',
                price: '$2'
            }]
        });

        this.auditService.GetAuditLogs()
            .subscribe(model => console.log(model));
    }
}