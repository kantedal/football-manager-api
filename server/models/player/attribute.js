export class Attribute {
  constructor(attr_name, attr_val, category){
    this._name = attr_name;
    this._value = attr_val;
    this._category = category;
  }

  get name(){ return this._name; };
  get value(){ return this._value; };
  get category(){ return this._category; };
}
