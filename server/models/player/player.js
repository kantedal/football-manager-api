import http from "es6-request";
import randgen from "randgen"; //For standard deviated numbers
import { Attributes, ATTRIBUTES_LIST } from "./attributes"; //For standard deviated numbers
import { Position } from './position'
import { round } from '../util/round'

export class Player {

  constructor(firstname, lastname, region, age, weight, height, attrs, teamId){
    this._firstname = firstname;
    this._lastname = lastname;
    this._region = region;
    this._age = age; // Saved as years with two decimals
    this._weight = weight; //in kg
    this._height = height; //in cm
    this._attrs = attrs;
    this._teamId = teamId;
  }

  static generateRandomPlayers(num, region, teamId) {
    return new Promise(
      function(resolve, reject) {
        var playerArray = [];
        console.log("GENERATE PLAYERS")
        //Generate random names with uinames api
        http.get("http://uinames.com/api/?gender=male&region="+region+"&amount="+num)
        .then((body) => {
          //Parse generated names to names array
          let persons = JSON.parse(body);

          for(let person of persons) {
            //Generate age in years
            let age = round(randgen.rnorm(26, 4), 2);

            //Generate height
            let height = round(randgen.rnorm(180, 175*0.04), 0);

            //Generate weight
            let weight = round(randgen.rnorm(height-100, 5), 0);

            //Generate attributes for the player
            let attributes = Attributes.generateNewAttributes(age, weight, height);

            playerArray.push(new Player(person.name, person.surname, region, age, weight, height, attributes, teamId));
          }

          resolve(playerArray);
        });
      }
    );
  }

  toJSON() {
    return {
      firstname: this._firstname,
      lastname: this._lastname,
      region: this._region,
      age: this._age,
      weight: this._weight,
      height: this._height,
      teamId: this._teamId,
      attributes: this._attrs.toJSON()
    }
  }

}
