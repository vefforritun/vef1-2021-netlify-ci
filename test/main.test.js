import { describe, expect, it } from '@jest/globals';
import { reverse } from '../src/lib/reverse.js';

describe('main.js', () => {
  it('should reverse a single char string', () => {
    const result = reverse('a');

    expect(result).toBe('a');
  });

  it('should reverse a string of length > 1', () => {
    const result = reverse('abc');

    expect(result).toBe('cba');
  });

  it('should return undefined for non-string', () => {
    const result = reverse(null);

    expect(result).toBe(undefined);
  });
});
