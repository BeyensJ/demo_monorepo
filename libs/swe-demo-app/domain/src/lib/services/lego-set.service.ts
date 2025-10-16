import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegoSet } from '../dtos/lego-set';


@Injectable({
  providedIn: 'root'
})
export class LegoSetService {
  private apiUrl = `${import.meta.env["NG_APP_LEGO_API_URL"]}`;

  legoSetResource = httpResource<LegoSet[]>(
    () => `${this.apiUrl}/api/legoset`,
    {
      defaultValue: [],
    }
  );
}
