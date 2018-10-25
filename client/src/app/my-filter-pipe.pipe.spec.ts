import { MyFilterPipePipe } from './my-filter-pipe.pipe';

describe('MyFilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyFilterPipePipe();
    expect(pipe).toBeTruthy();
  });
});
