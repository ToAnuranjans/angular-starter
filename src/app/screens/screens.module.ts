import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'about', component: AboutComponent
    }
];


@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        AboutComponent,
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ScreensModule {

}