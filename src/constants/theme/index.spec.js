import theme from './';

describe('Theme', () => {
  it('should return a valid object', () => {
    expect(theme).toBeTruthy();
  });
  it('should have the colors key', () => {
    expect(theme).toHaveProperty('colors');
  });
});
