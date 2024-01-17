import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { DevicesService } from '../devices.service';
@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private deviceService: DevicesService, private router: Router) { };

  id: number | undefined;
  deviceName: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.id = +param.get('id');
      this.deviceName = this.deviceService.getDeviceById(this.id);
    })
  };
}
