import { Attribute } from './attribute';

export const MAIN_ATTRIBUTES = {
  passing: {name: "Passing", id: 0},
  shooting: {name: "Shooting", id: 1},
  defending: {name: "Defending", id: 2},
  technique: {name: "Technique", id: 3},
  physical: {name: "Physical", id: 4},
  speed: {name: "Speed", id: 5},
  mental: {name: "Mental", id: 6},
};

export const ATTRIBUTES_LIST = {
  //Passing attributes
  passing: {name: "Passing", values: {
    longPassing: {name: "Long passing", main_attr_id: MAIN_ATTRIBUTES.passing.id},
    shortPassing: {name: "Short passing", main_attr_id: MAIN_ATTRIBUTES.passing.id},
    crossing: {name: "Crossing", main_attr_id: MAIN_ATTRIBUTES.passing.id},
    corners: {name: "Corners", main_attr_id: MAIN_ATTRIBUTES.passing.id}
  }},

  //Shooting attributes
  shooting: {name: "Shooting", values: {
    finishing: {name: "Finishing", main_attr_id: MAIN_ATTRIBUTES.shooting.id},
    longShots: {name: "Long shots", main_attr_id: MAIN_ATTRIBUTES.shooting.id},
    headingsPrecision: {name: "Headings precision", main_attr_id: MAIN_ATTRIBUTES.shooting.id},
    freekicks: {name: "Freekicks", main_attr_id: MAIN_ATTRIBUTES.shooting.id},
    penaltyTaking: {name: "Penalty taking", main_attr_id: MAIN_ATTRIBUTES.shooting.id}
  }},

  //Defending attributes
  defending: {name: "Defending", values: {
    tackling: {name: "Tackling", main_attr_id: MAIN_ATTRIBUTES.defending.id},
    marking: {name: "Marking", main_attr_id: MAIN_ATTRIBUTES.defending.id},
    defensivePositioning: {name: "Defensive positioning", main_attr_id: MAIN_ATTRIBUTES.defending.id}
  }},

  //Techinque attributes
  technique: {name: "Technique", values: {
    dribbling: {name: "Dribbling", main_attr_id: MAIN_ATTRIBUTES.technique.id},
    firstTouch: {name: "First touch", main_attr_id: MAIN_ATTRIBUTES.technique.id},
    creativity: {name: "Creativity", main_attr_id: MAIN_ATTRIBUTES.technique.id}
  }},

  //Physical attributes
  physical: {name: "Physical", values: {
    stamina: {name: "Stamina", main_attr_id: MAIN_ATTRIBUTES.physical.id},
    balance: {name: "Balance", main_attr_id: MAIN_ATTRIBUTES.physical.id},
    jumping: {name: "Jumping", main_attr_id: MAIN_ATTRIBUTES.physical.id},
    strength: {name: "Strength", main_attr_id: MAIN_ATTRIBUTES.physical.id},
    pace: {name: "Pace", main_attr_id: MAIN_ATTRIBUTES.speed.id},
    acceleration: {name: "Acceleration", main_attr_id: MAIN_ATTRIBUTES.speed.id}
  }},

  //Mental attributes
  mental: {name: "Mental", values: {
    aggression: {name: "Aggression", main_attr_id: MAIN_ATTRIBUTES.mental.id},
    workRate: {name: "Work rate", main_attr_id: MAIN_ATTRIBUTES.mental.id},
    composure: {name: "Composure", main_attr_id: MAIN_ATTRIBUTES.mental.id},
    teamWork: {name: "Team work", main_attr_id: MAIN_ATTRIBUTES.mental.id}
  }}

};

export class Attributes {
  constructor()
  {
    //Passing attrbiutes
    this.longPassing = new Attribute("Long passing", 0, MAIN_ATTRIBUTES.passing.id);
    this.shortPassing = new Attribute("Short passing", 0, MAIN_ATTRIBUTES.passing.id);
    this.crossing = new Attribute("Crossing", 0, MAIN_ATTRIBUTES.passing.id);
    this.longPassing = new Attribute("Long passing", 0, MAIN_ATTRIBUTES.passing.id);

    //Shoting attrbitues
    this.finishing = new Attribute("Finishing", 0, MAIN_ATTRIBUTES.shooting.id);
    this.longShots = new Attribute("Finishing", 0, MAIN_ATTRIBUTES.shooting.id);
    this.headingsPrecision = new Attribute("Headings precision", 0, MAIN_ATTRIBUTES.shooting.id);
    this.freekicks = new Attribute("Freekicks", 0, MAIN_ATTRIBUTES.shooting.id);
    this.penaltyTaking = new Attribute("Penalty taking", 0, MAIN_ATTRIBUTES.shooting.id);

    //Defending attributes
    this.tackling = new Attribute("Tackling", 0, MAIN_ATTRIBUTES.defending.id);
    this.marking = new Attribute("Marking", 0, MAIN_ATTRIBUTES.defending.id);
    this.defensivePositioning = new Attribute("Defensive positioning", 0, MAIN_ATTRIBUTES.defending.id);

    //Technical attributes
    this.dribbling = new Attribute("Dribbling", 0, MAIN_ATTRIBUTES.technique.id);
    this.firstTouch = new Attribute("First touch", 0, MAIN_ATTRIBUTES.technique.id);
    this.creativity = new Attribute("Creativity", 0, MAIN_ATTRIBUTES.technique.id);

    //Physical attribtues
    this.stamina = new Attribute("Stamina", 0, MAIN_ATTRIBUTES.physical.id);
    this.balance = new Attribute("Balance", 0, MAIN_ATTRIBUTES.physical.id);
    this.jumping = new Attribute("Jumping", 0, MAIN_ATTRIBUTES.physical.id);
    this.strength = new Attribute("Strength", 0, MAIN_ATTRIBUTES.physical.id);
    this.pace = new Attribute("Pace", 0, MAIN_ATTRIBUTES.physical.id);
    this.acceleration = new Attribute("Acceleration", 0, MAIN_ATTRIBUTES.physical.id);

    //Mental attributes
    this.aggression = new Attribute("Aggression", 0, MAIN_ATTRIBUTES.physical.id);
    this.workRate = new Attribute("Work rate", 0, MAIN_ATTRIBUTES.physical.id);
    this.composure = new Attribute("Composure", 0, MAIN_ATTRIBUTES.physical.id);
    this.teamWork = new Attribute("Team work", 0, MAIN_ATTRIBUTES.physical.id);
  }

  //Generate attributes for a new player
  static generateNewAttributes(playerAge, playerWeight, playerLength){
    let attr = new Attributes();
    console.log(attr);
  }


}
