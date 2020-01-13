import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {SharedDataService} from './shared-data.service';
import { DcPointDirective } from './dc-point.directive';
import { FooComponent } from './foo/foo.component';
import { BackgroundDirective } from './background.directive';
import { MyStructuralDirective } from './my-structural.directive';

@NgModule({
  entryComponents: [
    FooComponent,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    DcPointDirective,
    FooComponent,
    BackgroundDirective,
    MyStructuralDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SharedDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
