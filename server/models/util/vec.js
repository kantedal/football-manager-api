export class Vector {
  constructor() {
    this._elements = [];

    if(arguments.length == 0){
      this._elements = [0, 0];
    }
    else if(arguments.length == 1) {
      this._elements = [];
      for(let elem of arguments[0].elements)
        this._elements.push(elem);
    }
    else {
      for(let elem of arguments)
        this._elements.push(elem);
    }
  }

  //Calculate length of vector
  getLength() {
    let tot = 0;
    for(let element of this._elements)
      tot += element*element;
    return Math.round(Math.sqrt(tot) * 1e2) / 1e2;
  }

  //Normalize vector
  normalize() {
    let newLength = (arguments[0] != null ? arguments[0] : 1);
    console.log(newLength);
    let normFactor = this.getLength();
    console.log(normFactor);
    for(let i in this._elements)
      this._elements[i] = Math.round(this._elements[i] * 1/normFactor * newLength * 1e2) / 1e2;
  }

  //Multiply vector with scalar
  multiplyScalar(scalar) {
    for(let i in this._elements)
      this._elements[i] *= scalar;
  }

  //Add two vectors
  add(vec) {
    if(this._elements.length == vec.length)
      for(let i in this._elements){
        this._elements[i] = Math.round((this._elements[i] + vec.elementAt(i)) * 1e2) / 1e2;
      }

  }

  get x() { return this._elements[0]; }
  get y() { return this._elements[1]; }
  get z() { return this._elements[2]; }

  set x(elem) { this._elements[0] = elem; }
  set y(elem) { this._elements[1] = elem; }
  set z(elem) { this._elements[2] = elem; }

  get elements() { return this._elements; }
  get length() { return this._elements.length; }
  elementAt(i) { return this._elements[i]; }

}
