import { evaluateRepository, add } from '../src/index.ts';

describe('Repository Evaluation Tests', () => {
  it('should evaluate repository correctly', () => {
    expect(evaluateRepository('healthy')).toBe('Repository evaluation status: healthy');
  });

  it('should add numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
