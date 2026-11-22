import test from 'node:test';
import assert from 'node:assert';
import { slugify } from '../src/utils/slugify.ts';

test('slugify - standard strings', () => {
  assert.strictEqual(slugify('Hello World!'), 'hello-world');
  assert.strictEqual(slugify('TypeScript & Node.js 22'), 'typescript-node-js-22');
});

test('slugify - special characters and accented letters', () => {
  assert.strictEqual(slugify('Café au Lait?'), 'cafe-au-lait');
  assert.strictEqual(slugify('Price: $100.00 (USD)'), 'price-10000-usd');
  assert.strictEqual(slugify('---Hello---World---'), 'hello-world');
});

test('slugify - whitespace and casing handling', () => {
  assert.strictEqual(slugify('   Multiple    Spaces   '), 'multiple-spaces');
  assert.strictEqual(slugify('UPPERCASE STRING'), 'uppercase-string');
});

test('slugify - edge cases', () => {
  assert.strictEqual(slugify(''), '');
  assert.strictEqual(slugify('   '), '');
  assert.strictEqual(slugify('!@#$%^&*()'), '');
});
