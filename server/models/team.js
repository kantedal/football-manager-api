import { Player } from './player/player'
import moment from 'moment';

export const TEAM_CREATIONS_ERRORS = {
  connection_timeout: {id: 0},
  teamname_exists: {id: 1},
  info_missing: {id: 2}
};

const START_TEAM_SIZE = 18;

export class Team {

  constructor(teamname, owner, players){
    this._teamname = teamname;
    this._owner = owner;
    this._players = players;
  }

  static createNewTeam(teamname, owner){
    return new Promise(
      function(resolve, reject) {
        Player.generateRandomPlayers(START_TEAM_SIZE, 'Sweden', owner)
          .then(function(players) {
            resolve(new Team(teamname, owner, players));
          });
      }
    );
  }

  toJSON() {
    return {
      teamname: this._teamname,
      owner: this._owner,
      createdAt: moment().format()
    }
  }

  playersToJSON() {
    let playersJSON = [];
    for(let player of this._players)
      playersJSON.push(player.toJSON());

    return playersJSON;
  }

  get teamname(){ return this._players; }
  get players(){ return this._players; }
  get players(){ return this._players; }
}
