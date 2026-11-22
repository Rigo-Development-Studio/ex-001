/**
 * Converts a string into a clean, URL-friendly slug.
 *
 * Converts strings to lowercase, replaces whitespace and special characters
 * with hyphens, and trims leading and trailing hyphens.
 *
 * @param text - The string to be slugified.
 * @returns The converted slug string.
 */
export function slugify(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default slugify;
