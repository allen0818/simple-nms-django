import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetconfOperatorComponent } from './device/pages/netconf-operator/netconf-operator.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NetconfOperatorComponent,
    children: [
      { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) }
    ]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
