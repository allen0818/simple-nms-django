import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceModule } from './device/device.module';
import { HomeModule } from './home/home.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,

    // feature module
    HomeModule,
    DeviceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
