import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationStateService {

  private readonly isMobileResolution: boolean;

  constructor() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }


}
