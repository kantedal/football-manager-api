import { Vector } from '../util/vec';

export class PlayerRole {
  constructor(){
    //Player base position, normalized to 0-1
    this._basePos = new Vector(0.0, 0.0);
  }

  static generateRoleFromConfig(type, typeConfigs){
    let playerRole = new PlayerRole();

    let positionModifier = new Vector(0,0);
    let isCentral = false;
    for(let config of typeConfigs) {
      if(TypeConfig.central.id == config.id)
        isCentral = true;

      positionModifier.add(config.posModifier);
    }

    if(isCentral)
      positionModifier.x = positionModifier.x*0.5;

    let playerBasePos = new Vector(type.basePos);
    playerBasePos.add(positionModifier);
    playerRole.basePos = playerBasePos;

    return playerRole;
  }

  toJSON() {
    return {
      basePos: this._basePos
    }
  }

  get basePos() { return this._basePos; }
  set basePos(pos) { this._basePos = pos; }
}

export const Type = {
  goalkeeper: {id: 0, basePos: new Vector(0.0, -1.0)},
  defender:   {id: 1, basePos: new Vector(0.0, -0.33)},
  midfielder: {id: 2, basePos: new Vector(0.0,  0.33)},
  attacker:   {id: 3, basePos: new Vector(0.0,  1.0)},
};

export const TypeConfig = {
  central:   {id: 0, posModifier: new Vector(0.0,  0.0)},
  offensive: {id: 1, posModifier: new Vector(0.0,  0.25)},  //Increases players base y pos by 0.25
  defensive: {id: 2, posModifier: new Vector(0.0, -0.25)}, //Decreases players base y pos by 0.25
  left:      {id: 3, posModifier: new Vector(-1.0, 0.0)},  //Decreases players base x pos by 0.4
  right:     {id: 4, posModifier: new Vector(1.0,  0.0)},   //Increases players base x pos by 0.4
}

export const PredefinedPlayerRoles = {
  //Defenders
  left_back: {
    full_name: "Left back",
    short_name: "LB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.left]); }
  },
  left_wing_back: {
    full_name: "Left wing back",
    short_name: "LWB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.left, TypeConfig.offensive]) }
  },
  right_back: {
    full_name: "Right back",
    short_name: "RB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.right]) }
  },
  right_wing_back: {
    full_name: "Right wing back",
    short_name: "RWB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.right, TypeConfig.offensive]) }
  },
  central_back: {
    full_name: "Central back",
    short_name: "CB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.central]) }
  },
  central_right_back: {
    full_name: "Central back",
    short_name: "CB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.central, TypeConfig.right]) }
  },
  central_left_back: {
    full_name: "Central back",
    short_name: "CB",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.defender, [TypeConfig.central, TypeConfig.left]) }
  },

  //Midfielders
  left_midfielder: {
    full_name: "Left midfielder",
    short_name: "LM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.left]) }
  },
  left_attacking_midfielder: {
    full_name: "Left attacking midfielder",
    short_name: "RAM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.right, TypeConfig.offensive]) }
  },
  right_midfielder: {
    full_name: "Right midfielder",
    short_name: "RM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.right]) }
  },
  right_attacking_midfielder: {
    full_name: "Right attacking midfielder",
    short_name: "RAM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.right, TypeConfig.offensive]) }
  },
  central_midfielder: {
    full_name: "Central midfielder",
    short_name: "CM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.central]) }
  },
  central_right_midfielder: {
    full_name: "Central midfielder",
    short_name: "CM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.central, TypeConfig.right]) }
  },
  central_left_midfielder: {
    full_name: "Central midfielder",
    short_name: "CM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.central, TypeConfig.left]) }
  },
  central_defensive_midfielder: {
    full_name: "Central defensive midfielder",
    short_name: "CDM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.central, TypeConfig.defensive]) }
  },
  central_attacking_midfielder: {
    full_name: "Central attacking midfielder",
    short_name: "CAM",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.midfielder, [TypeConfig.central, TypeConfig.offensive]) }
  },

  //Attackers
  left_winger: {
    full_name: "Left winger",
    short_name: "LW",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.attacker, [TypeConfig.left, TypeConfig.defensive]) }
  },
  right_winger: {
    full_name: "Right winger",
    short_name: "RW",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.attacker, [TypeConfig.right, TypeConfig.defensive]) }
  },
  central_forward: {
    full_name: "Central forward",
    short_name: "CF",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.attacker, [TypeConfig.central, TypeConfig.defensive]) }
  },
  striker: {
    full_name: "Striker",
    short_name: "ST",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.attacker, [TypeConfig.central]) }
  },
  striker_left: {
    full_name: "Striker",
    short_name: "ST",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.attacker, [TypeConfig.central, TypeConfig.left]) }
  },
  striker_right: {
    full_name: "Striker",
    short_name: "ST",
    role: () => { return PlayerRole.generateRoleFromConfig(Type.attacker, [TypeConfig.central, TypeConfig.right]) }
  }
};
