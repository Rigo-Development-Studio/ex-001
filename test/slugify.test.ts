import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/utils/slugify.ts';

describe('slugify utility function', () => {
  it('should export slugify function from src/utils/slugify.ts', () => {
    assert.strictEqual(typeof slugify, 'function');
  });

  it('should convert strings to lowercase', () => {
    assert.strictEqual(slugify('HELLO WORLD'), 'hello-world');
    assert.strictEqual(slugify('FooBar'), 'foobar');
  });

  it('should replace whitespace with hyphens', () => {
    assert.strictEqual(slugify('hello world'), 'hello-world');
    assert.strictEqual(slugify('multiple   spaces   here'), 'multiple-spaces-here');
    assert.strictEqual(slugify('tabs\tand\nnewlines'), 'tabs-and-newlines');
  });

  it('should replace special characters with hyphens', () => {
    assert.strictEqual(slugify('hello & world!'), 'hello-world');
    assert.strictEqual(slugify('foo@bar#baz$'), 'foo-bar-baz');
    assert.strictEqual(slugify('TypeScript + Node.js 22'), 'typescript-node-js-22');
  });

  it('should trim leading and trailing hyphens', () => {
    assert.strictEqual(slugify('---hello world---'), 'hello-world');
    assert.strictEqual(slugify('  hello world  '), 'hello-world');
    assert.strictEqual(slugify('!hello world!'), 'hello-world');
  });

  it('should handle accented and unicode characters', () => {
    assert.strictEqual(slugify('Café & Crème Brûlée'), 'cafe-creme-brulee');
  });

  it('should handle empty strings and strings with only special characters', () => {
    assert.strictEqual(slugify(''), '');
    assert.strictEqual(slugify('   '), '');
    assert.strictEqual(slugify('!@#$%^&*()'), '');
    assert.strictEqual(slugify('---'), '');
  });

  it('should handle numbers in string correctly', () => {
    assert.strictEqual(slugify('Version 2.0.0'), 'version-2-0-0');
    assert.strictEqual(slugify('123 test 456'), '123-test-456');
  });
});
