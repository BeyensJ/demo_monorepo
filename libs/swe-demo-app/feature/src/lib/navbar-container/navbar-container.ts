import { Component } from '@angular/core';
import { Navbar } from '@swe-demo/swe-demo-app-ui';
import { NavItem } from '@swe-demo/shared-domain';

@Component({
  selector: 'lib-swe-demo-app-feature-navbar-container',
  imports: [Navbar],
  templateUrl: './navbar-container.html',
  styleUrl: './navbar-container.css',
})
export class NavbarContainer {

  readonly items: NavItem[] = [
    {
      label: "Home", path: "/"
    },
    {
      label: "Products", path: "/products"
    },
    {
      label: "Account", path: "/account"
    }
  ]

  onNavigate(path: string) {
    console.log("Navigation triggered to " + path);
  }
}

