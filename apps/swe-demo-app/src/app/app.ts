import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarContainer } from '@swe-demo/swe-demo-app-feature';

@Component({
  imports: [RouterModule, NavbarContainer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'swe-demo-app';

  constructor() {
    console.log(import.meta.env['NG_APP_TEST_VALUE']);
  }
}
