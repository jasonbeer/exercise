import { TestBed, async } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';

describe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      CountryService
    ]
  }));

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });

  it('should be get list of countries', async(() => {
    const service: CountryService = TestBed.get(CountryService);
    service.getConfig().subscribe((data) => {
      expect(data).toBeDefined();
    })
  }))
});
