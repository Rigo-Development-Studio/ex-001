/**
 * Main application entrypoint or core module for ex-001.
 */
export function getProjectStatus() {
  return {
    status: 'healthy',
    repository: 'ex-001'
  };
}

if (typeof process !== 'undefined' && process.argv && process.argv[1]?.endsWith('index.js')) {
  console.log(JSON.stringify(getProjectStatus(), null, 2));
}
