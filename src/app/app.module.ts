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
import { SumPipe } from './sum.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

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
    SumPipe,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    SharedDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
