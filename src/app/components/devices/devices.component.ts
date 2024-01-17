import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DevicesService } from './devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  constructor(private deviceService: DevicesService, private router: Router, private activatedRoute: ActivatedRoute) { };

  devices: any[] = [];

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();
  };

  showDeviceDetails(device: any) {
    this.router.navigate(['indoor', device.id], { relativeTo: this.activatedRoute });
  };

  goToOutdoorDevices() {
    this.router.navigate(['outdoor'], { relativeTo: this.activatedRoute });
  };
}
