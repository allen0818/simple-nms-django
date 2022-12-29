import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { NetconfOperatorComponent } from './netconf-operator/netconf-operator.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';


@NgModule({
  declarations: [
    NetconfOperatorComponent,
    DeviceListComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
