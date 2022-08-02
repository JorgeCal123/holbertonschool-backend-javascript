export default function hasValuesFromArray(set, array) {
  let found = true;
  let i = 0;
  while (found && i < array.length) {
    if (set.has(array[i]) === false){
        found = false;
      }
    i++;
  }
  return found;
}