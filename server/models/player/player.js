import http from "es6-request";
import randgen from "randgen"; //For standard deviated numbers
import { Attributes, ATTRIBUTES_LIST } from "./attributes"; //For standard deviated numbers
import { Position } from './position'

export class Player {

  constructor(firstname, lastname, region, age, teamId){
    this.firstname = firstname;
    this.lastname = lastname;
    this.region = region;
    this.age = age; // Saved as years with two decimals
    this.teamId = teamId;
  }

  static generateRandomPlayers(num, region, teamId) {
    let playerArray = [];

    //Generate random names with uinames api
    http.get("http://uinames.com/api/?gender=male&region="+region+"&amount="+num)
    .then((body) => {
      //Parse generated names to names array
      let persons = JSON.parse(body);

      for(let person of persons) {
        //Generate age for each player
        let ageYears = randgen.rnorm(26, 4).toFixed(2);

        //Generate attributes for the player
        let attributes = null;

        playerArray.push(new Player(person.name, person.surname, region, ageYears, teamId));
      }
      Attributes.generateNewAttributes(10, 10, 10);
      // let attributes = new Attributes();
      // for(let main_attr in ATTRIBUTES_LIST){
      //   console.log(main_attr);
      //   console.log("-----------------")
      //   for(let attr in ATTRIBUTES_LIST[main_attr].values)
      //     console.log("    " + attr)
      // }
    });
  }
}
