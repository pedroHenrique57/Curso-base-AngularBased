import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapPipe } from './shared/pipes/wrap/wrap.pipe';
import { PercentagePipe } from './shared/pipes/percentage/percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WrapPipe,
    PercentagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
