import { Component, inject } from '@angular/core';
import { LegoSetService } from '@swe-demo/swe-demo-app-domain';

@Component({
  selector: 'lib-swe-demo-feature-lego-set-overview',
  imports: [],
  templateUrl: './lego-set-overview.html',
  styleUrl: './lego-set-overview.css',
})
export class LegoSetOverview {
  private readonly legoService = inject(LegoSetService);

  legoSets = this.legoService.legoSetResource.value;
}
