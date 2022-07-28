export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof lenght !== 'number') {
      throw new TypeError('lenght must be a number');
    } else if (Array.isArray(students) === false) {
      throw new TypeError('students must be a array');
    } else {
      this._name = name;
      this._lenght = lenght;
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(lenght) {
    this._length = lenght;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
