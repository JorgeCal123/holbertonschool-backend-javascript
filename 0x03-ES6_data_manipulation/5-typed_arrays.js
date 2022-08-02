export default function createInt8TypedArray(lenght, position, value) {
  const buffer = new ArrayBuffer(lenght);
  const int8Array = new Uint8Array(buffer);
  int8Array[position] = value;
  const dataView = new DataView(buffer);

  return dataView;
}
