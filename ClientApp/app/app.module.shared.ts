import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavMenuComponent,
        AgreementComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        Ng2OrderModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'agreement', pathMatch: 'full' },
            { path: 'agreement', component: AgreementComponent },
            { path: '**', redirectTo: 'agreement' }
        ])
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModuleShared {
}
