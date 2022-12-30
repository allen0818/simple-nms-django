import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { NetconfOperatorComponent } from './pages/netconf-operator/netconf-operator.component';


@NgModule({
  declarations: [
    NetconfOperatorComponent,
    DeviceListComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule,
  ],
  exports: [
    NetconfOperatorComponent,
  ]
})
export class DeviceModule { }
