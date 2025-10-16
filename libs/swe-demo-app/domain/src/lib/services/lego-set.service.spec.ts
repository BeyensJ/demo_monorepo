import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http'; 
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LegoSetService } from './lego-set.service';

describe('LegoSetService', () => {
  let service: LegoSetService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LegoSetService,
        provideHttpClient(),
        provideHttpClientTesting(), 
      ]
    });
    service = TestBed.inject(LegoSetService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  /*it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
