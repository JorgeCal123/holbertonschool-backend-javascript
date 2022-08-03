export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Uint8Array(buffer);
  int8Array[position] = value;
  const dataView = new DataView(buffer);
  return dataView;
}
