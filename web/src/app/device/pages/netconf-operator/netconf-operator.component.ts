import { NetconfService } from './../../services/netconf.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-netconf-operator',
  templateUrl: './netconf-operator.component.html',
  styleUrls: ['./netconf-operator.component.scss']
})
export class NetconfOperatorComponent implements OnInit {

  reqXmlData: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private netconfService: NetconfService,

  ) { }

  ngOnInit(): void {
    this.getCapability('netconf:172.18.50.130:11002');
  }

  getCapability(deviceId: string) {

    this.netconfService.getCapability(deviceId).subscribe(resp => {
      console.log('response', resp);

    }, err => {
      console.log('error', err);
    });
  }

  sendRPC(deviceId: string, xmlData: string) {
    this.netconfService.sendRPC(deviceId, xmlData).subscribe(resp => {
      console.log('response', resp);

    }, err => {
      console.log('error', err);
    });
  }

}
