import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: NetconfOperatorComponent,
  //   children: [
  //     { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) }
  //   ]
  // },
  // { path: '**', redirectTo: 'home' },
  { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
