
export function reverse(str) {
  const split = str.split('');

  split.reverse();

  return split.join('');
}
