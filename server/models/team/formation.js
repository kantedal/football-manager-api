import { Vector } from '../util/vec';
import { PlayerRole, Type, TypeConfig, PredefinedPlayerRoles } from './player_role';

export class Formation {
  constructor() {
    this._playerRoles = [];
    for(let i=0; i<10; i++)
      this._playerRoles.push(new PlayerRole());
  }

  setPlayerRoleAt(index, playerRole) {
    this._playerRoles[index] = playerRole;
  }

  toJSON() {
    let rolesJSON = [];
    for(let role of this._playerRoles)
      rolesJSON.push(role.toJSON())

    return {
      playerRoles: rolesJSON
    }
  }
}

export const PredefinedFormations = {
  '4-4-2': () => {
    let formation = new Formation();

    formation.setPlayerRoleAt(0, PredefinedPlayerRoles.left_back.role());
    formation.setPlayerRoleAt(1, PredefinedPlayerRoles.central_left_back.role());
    formation.setPlayerRoleAt(2, PredefinedPlayerRoles.central_right_back.role());
    formation.setPlayerRoleAt(3, PredefinedPlayerRoles.right_back.role());

    formation.setPlayerRoleAt(4, PredefinedPlayerRoles.left_midfielder.role());
    formation.setPlayerRoleAt(5, PredefinedPlayerRoles.central_left_midfielder.role());
    formation.setPlayerRoleAt(6, PredefinedPlayerRoles.central_right_midfielder.role());
    formation.setPlayerRoleAt(7, PredefinedPlayerRoles.right_midfielder.role());

    formation.setPlayerRoleAt(8, PredefinedPlayerRoles.striker_left.role());
    formation.setPlayerRoleAt(9, PredefinedPlayerRoles.striker_right.role());

    return formation;
  }
}
