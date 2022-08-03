export default function cleanSet(set, startString) {
  const list = [...set.values()];
  if (startString === undefined || startString === '' || typeof startString !== 'string') {
    return '';
  }
  const newlist = [];

  list.forEach((word) => {
    let word2 = '';
    if (word !== undefined) {
      const arr = Array.from(word, (val, index) => {
        if (word.startsWith(startString)) {
          if (index >= startString.length) {
            word2 += val;
          }
        }
        return word2;
      });
      if (arr[arr.length - 1] !== '') {
        newlist.push(arr[arr.length - 1]);
      }
    }
  });
  return [...newlist].join('-');
}
