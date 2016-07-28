import { Formation, PredefinedFormations } from "./formation"
import { PredefinedPlayerRoles } from "./player_role"

export class Tactic {
  constructor() {
    this._formation = new Formation();
    this._teamWidth = 1.0;
  }

  static genarateNewTactic() {
    let tactic = new Tactic();
    tactic.formation = PredefinedFormations['4-4-2']();
    tactic.teamWidth = 0.8;
    return tactic;
  }

  toJSON() {
    return {
      formation: this._formation.toJSON(),
      teamWidth: this._teamWidth
    }
  }

  get formation() { return this._formation; }
  set formation(formation) { this._formation = formation; }
  get teamWidth() { return this._teamWidth; }
  set teamWidth(teamWidth) { this._teamWidth = teamWidth; }
}
