import { async, TestBed } from '@angular/core/testing';
import { MyComponent, MyComponentModule } from './my-component';

describe('MyComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [ MyComponentModule ]});
    TestBed.compileComponents();
  }));

  it('sanity check', () => {
    const fixture = TestBed.createComponent(MyComponent);
    expect(fixture).toBeDefined();
  });
});
