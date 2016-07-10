"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//export const START_TEAM_SIZE = 18;

var Team = exports.Team = function () {
  function Team(teamname, owner) {
    _classCallCheck(this, Team);

    this._teamname = teamName;
    this._owner = owner;
    this._players = [];
    console.log(START_TEAM_SIZE);
  }

  _createClass(Team, [{
    key: "toJSON",
    value: function toJSON() {
      var playersJSON = [];
      for (var player in this.players) {
        playersJSON.push(player.toJSON);
      }return {
        teamname: this.teamname,
        owner: this.owner,
        players: playersJSON
      };
    }
  }], [{
    key: "createNewTeam",
    value: function createNewTeam(teamname, owner) {
      var newTeam = new Team(teamname, owner);
      for (var i in START_TEAM_SIZE) {
        console.log(i);
      }
    }
  }]);

  return Team;
}();