import { Attribute } from './attribute';
import { Vector } from '../util/vec';
import { round } from '../util/round'
import randgen from "randgen"; //For standard deviated numbers

export const MAIN_ATTRIBUTES = {
  passing: {name: "Passing", id: 0},
  shooting: {name: "Shooting", id: 1},
  defending: {name: "Defending", id: 2},
  technique: {name: "Technique", id: 3},
  physical: {name: "Physical", id: 4},
  mental: {name: "Mental", id: 5},
};

export class Attributes {
  constructor()
  {
    this._attrs = {
      //Passing attrbiutes
      longPassing: new Attribute("Long passing", 0, MAIN_ATTRIBUTES.passing.id),
      shortPassing: new Attribute("Short passing", 0, MAIN_ATTRIBUTES.passing.id),
      crossing: new Attribute("Crossing", 0, MAIN_ATTRIBUTES.passing.id),
      longPassing: new Attribute("Long passing", 0, MAIN_ATTRIBUTES.passing.id),

      //Shoting attrbitues
      finishing: new Attribute("Finishing", 0, MAIN_ATTRIBUTES.shooting.id),
      longShots: new Attribute("Finishing", 0, MAIN_ATTRIBUTES.shooting.id),
      headingsPrecision: new Attribute("Headings precision", 0, MAIN_ATTRIBUTES.shooting.id),
      freekicks: new Attribute("Freekicks", 0, MAIN_ATTRIBUTES.shooting.id),
      penaltyTaking: new Attribute("Penalty taking", 0, MAIN_ATTRIBUTES.shooting.id),

      //Defending attributes
      tackling: new Attribute("Tackling", 0, MAIN_ATTRIBUTES.defending.id),
      marking: new Attribute("Marking", 0, MAIN_ATTRIBUTES.defending.id),
      defensivePositioning: new Attribute("Defensive positioning", 0, MAIN_ATTRIBUTES.defending.id),

      //Technical attributes
      dribbling: new Attribute("Dribbling", 0, MAIN_ATTRIBUTES.technique.id),
      firstTouch: new Attribute("First touch", 0, MAIN_ATTRIBUTES.technique.id),
      creativity: new Attribute("Creativity", 0, MAIN_ATTRIBUTES.technique.id),

      //Physical attribtues
      stamina: new Attribute("Stamina", 0, MAIN_ATTRIBUTES.physical.id),
      balance: new Attribute("Balance", 0, MAIN_ATTRIBUTES.physical.id),
      jumping: new Attribute("Jumping", 0, MAIN_ATTRIBUTES.physical.id),
      strength: new Attribute("Strength", 0, MAIN_ATTRIBUTES.physical.id),
      pace: new Attribute("Pace", 0, MAIN_ATTRIBUTES.physical.id),
      acceleration: new Attribute("Acceleration", 0, MAIN_ATTRIBUTES.physical.id),

      //Mental attributes
      aggression: new Attribute("Aggression", 0, MAIN_ATTRIBUTES.mental.id),
      workRate: new Attribute("Work rate", 0, MAIN_ATTRIBUTES.mental.id),
      composure: new Attribute("Composure", 0, MAIN_ATTRIBUTES.mental.id),
      teamWork: new Attribute("Team work", 0, MAIN_ATTRIBUTES.mental.id)
    }
  }

  //Generate attributes for a new player
  static generateNewAttributes(playerAge, playerWeight, playerHeight) {
    let newAttrs = new Attributes();
    let meanLength = new Vector([25, 25, 25, 25, 25, 25]).length(); // Mean length of total abilty for new player

    //Average abiltiy between 0-100 for each main attribute is generated
    let mainAttributesAverage = new Vector([
      Math.round(Math.random()*100 * 1e2) / 1e2, //Passing
      Math.round(Math.random()*100 * 1e2) / 1e2, //Shooting
      Math.round(Math.random()*100 * 1e2) / 1e2, //Defending
      Math.round(Math.random()*100 * 1e2) / 1e2, //Technique
      Math.round(Math.random()*100 * 1e2) / 1e2, //Physical
      Math.round(Math.random()*100 * 1e2) / 1e2  //Mental
    ]);
    mainAttributesAverage.normalize(parseFloat(randgen.rnorm(meanLength, 15))); //Normalize abilities for a new player and randomize with standard dev of 15

    //Age factor peaks at 28, descends quick after 28 and rises after 17
    let ageFactor = (playerAge < 28 ? (-0.004 * Math.pow(playerAge-28, 2) + 1) : (-0.007 * Math.pow(playerAge-28, 2) + 1));
    ageFactor += (Math.random()-0.5) * 2 * 0.2; //Add random term to agefactor

    //Strength factor combines weight and length
    let strengthFactor = Math.round((Math.pow((100 + playerWeight) / playerHeight, 4) + (Math.random()-0.5) * 2 * 0.1) * 1e2) / 1e2;

    for(let attr_key in newAttrs._attrs) {
      let attr = newAttrs._attrs[attr_key];

      let value = Math.max(Math.round(randgen.rnorm(mainAttributesAverage.elementAt(attr.category), 5) * 1e2) / 1e2, 1);
      newAttrs._attrs[attr_key].value = Math.round(value*ageFactor * 1e2) / 1e2;
    }

    return newAttrs;
  }

  toJSON() {
    let attributesJSON = {};
    for(let attr_key in this._attrs)
      attributesJSON[attr_key] = this._attrs[attr_key].value;
    return attributesJSON;
  }

}
