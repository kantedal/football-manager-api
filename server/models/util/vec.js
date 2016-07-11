export class Vector {
  constructor(vecArray){
    this._vector = vecArray;
    this._elements = vecArray.length;
  }

  normalize() {
    let newLength = (arguments[0] != null ? arguments[0] : 1);
    let normFactor = this.length();
    for(let i in this._vector)
      this._vector[i] = Math.round(this._vector[i] * 1/normFactor * newLength * 1e2) / 1e2;
  }

  length() {
    let tot = 0;
    for(let element of this._vector)
      tot += element*element;

    return Math.round(Math.sqrt(tot) * 1e2) / 1e2;
  }

  multiplyScalar(scalar) {
    for(let i in this._vector)
      this._vector[i] *= scalar;
  }

  get vector() { return this._vector; }
  elementAt(i) { return this._vector[i]; }

}
