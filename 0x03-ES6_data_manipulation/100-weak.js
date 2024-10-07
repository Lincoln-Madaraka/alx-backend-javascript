export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let counter = weakMap.get(endpoint);
  if (!counter) {
    weakMap.set(endpoint, 1);
  } else {
    counter += 1;
    weakMap.set(endpoint, counter);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
