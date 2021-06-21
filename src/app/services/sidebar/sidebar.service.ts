import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  hideSideNav: boolean = true;
  constructor() { }
  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
