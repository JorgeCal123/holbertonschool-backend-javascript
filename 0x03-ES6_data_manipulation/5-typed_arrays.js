export default function createInt8TypedArray(lenght, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(lenght);
  const int8Array = new Uint8Array(buffer);
  int8Array[position] = value;
  const dataView = new DataView(buffer);
  return dataView;
}
