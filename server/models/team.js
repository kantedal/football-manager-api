import { Player } from './player/player'

const START_TEAM_SIZE = 18;

export class Team {

  constructor(teamname, owner){
    this._teamname = teamname;
    this._owner = owner;
    this._players = [];
  }

  static createNewTeam(teamname, owner){
    let newTeam = new Team(teamname, owner);

    for(let i=0; i<1; i++){
      let newPlayer = Player.generateRandomPlayers(START_TEAM_SIZE, 'Sweden', owner);
    }
  }

  toJSON(){
    let playersJSON = [];
    for(let player in this.players)
      playersJSON.push(player.toJSON);

    return {
      teamname: this.teamname,
      owner: this.owner,
      players: playersJSON
    }
  }

}
