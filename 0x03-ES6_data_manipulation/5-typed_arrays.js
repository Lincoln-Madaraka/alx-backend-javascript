export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const dateView = new DataView(buffer);
    dateView.setInt8(position, value);
    return dateView;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
