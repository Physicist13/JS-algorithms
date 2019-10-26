/**
 * @param {number} n
 * @return {number}
 */
export default function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
