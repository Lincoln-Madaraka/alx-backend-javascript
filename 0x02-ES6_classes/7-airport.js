export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = val;
    }
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = val;
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
