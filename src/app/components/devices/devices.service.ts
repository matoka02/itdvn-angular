import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  constructor() { };
  private devices = [
    { id: 1, device: 'microwave', brand: 'Scarlett' },
    { id: 2, device: 'teapot', brand: 'Fillips' },
    { id: 3, device: 'vacoom cleaner', brand: 'Roventa' },
  ];

  getDevices() {
    return this.devices
  };

  getDeviceById(id: number) {
    return this.getDevices().find(item => item.id === id)
  };
}
