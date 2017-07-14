import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRouteGuard } from './auth/auth-guard';
import { HttpModule } from '@angular/http';
import { TokenService } from './service-proxy/service-proxy';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule, FormsModule,HttpModule]
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppRouteGuard,
                TokenService
            ]
        }
    }
}