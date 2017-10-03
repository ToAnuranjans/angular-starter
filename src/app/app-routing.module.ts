import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pageNotFound.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
    {
        path: 'login', component:LoginComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];


@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}