export default function createInt8TypedArray(lenght, position, value) {
    const buffer = new ArrayBuffer(lenght);
    const int8Array = new Uint8Array(buffer);  
    try {
    int8Array[position] = value;
    const dataView = new DataView(buffer);
    return dataView;

  } catch (e) {
    throw new Error('Position outside range');
  }
}
