export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let value = 1;
  if (weakMap.get(endpoint) !== undefined) {
    value = weakMap.get(endpoint) + 1;
  }
  weakMap.set(endpoint, value);
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
}
