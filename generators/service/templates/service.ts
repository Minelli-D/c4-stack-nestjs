import { TestBed } from '@angular/core/testing';

import { <%= serviceName %>Service } from './<%= serviceName %>.service';

describe('<%= serviceName %>Service', () => {
  let service: <%= serviceName %>Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(<%= serviceName %>Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
