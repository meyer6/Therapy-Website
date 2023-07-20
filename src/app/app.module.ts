import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { Module1aComponent } from './Modules/module1a/module1a.component';
import { Module2aComponent } from './Modules/module2a/module2a.component';
import { Module3Component } from './Modules/module3/module3.component';
import { FooterComponent } from './Modules/footer/footer.component';
import { TextItemComponent } from './text-item/text-item.component';
import { Module2bComponent } from './Modules/module2b/module2b.component';
import { Module1bComponent } from './Modules/module1b/module1b.component';
import { LandingModuleComponent } from './Modules/landing-module/landing-module.component';
import { ContactComponent } from './customContentSections/contact/contact.component';
import { Module12MobileComponent } from './Modules/module12-mobile/module12-mobile.component';
import { ImageModuleComponent } from './Modules/image-module/image-module.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ImageGridComponent } from './Modules/image-grid/image-grid.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        Module1aComponent,
        Module2aComponent,
        Module3Component,
        FooterComponent,
        TextItemComponent,
        Module2bComponent,
        Module1bComponent,
        LandingModuleComponent,
        ContactComponent,
        Module12MobileComponent,
        ImageModuleComponent,
        PopUpComponent,
        ImageGridComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        RouterModule.forRoot([
            { path: '**', component: AppComponent}
  		]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
