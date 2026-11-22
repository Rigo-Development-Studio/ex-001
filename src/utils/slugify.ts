export function slugify(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }
  return text
    .normalize('NFKD') // split accented characters into their base characters and diacritics
    .replace(/[\u0300-\u036f]/g, '') // remove all the combining diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric characters except spaces and hyphens
    .replace(/[\s-]+/g, '-') // replace spaces and consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // trim leading and trailing hyphens
}
