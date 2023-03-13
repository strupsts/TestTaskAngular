import { FilterFilmsPipe } from './filter-films.pipe';

describe('FilterFilmsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterFilmsPipe();
    expect(pipe).toBeTruthy();
  });
});
