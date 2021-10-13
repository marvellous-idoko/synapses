import { MaxRoutingModule } from './max-routing.module';

describe('MaxRoutingModule', () => {
  let maxRoutingModule: MaxRoutingModule;

  beforeEach(() => {
    maxRoutingModule = new MaxRoutingModule();
  });

  it('should create an instance', () => {
    expect(maxRoutingModule).toBeTruthy();
  });
});
