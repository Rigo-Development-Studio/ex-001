import test from 'node:test';
import assert from 'node:assert';
import { getProjectStatus } from './index.js';

test('getProjectStatus returns healthy status for ex-001', () => {
  const status = getProjectStatus();
  assert.strictEqual(status.status, 'healthy');
  assert.strictEqual(status.repository, 'ex-001');
});
