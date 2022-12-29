

import { DeviceListComponent } from './pages/device-list/device-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetconfOperatorComponent } from './pages/netconf-operator/netconf-operator.component';

const routes: Routes = [
  { path: '', component: DeviceListComponent },
  { path: 'netconf-op', component: NetconfOperatorComponent },
  // { path: ':id', component: DeviceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
