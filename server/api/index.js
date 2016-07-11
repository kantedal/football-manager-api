import { Router } from 'express';
import facets from './facets';
import { Team, TEAM_CREATIONS_ERRORS} from '../models/team';
import shortid from 'shortid';
import moment from 'moment'
import firebase from 'firebase';

export default function() {
	var api = Router();
	var app = firebase.initializeApp({
		apiKey: 'AIzaSyDNz876Gw3SG7hOxVQL9stfRUXx1DqFVCc',
    authDomain: 'football-manager-832cc.firebaseapp.com',
    databaseURL: 'https://football-manager-832cc.firebaseio.com',
    storageBucket: 'football-manager-832cc.appspot.com'
	});
	// mount the facets resource
	api.use('/facets', facets);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	api.get('/new_team', (req, res) => {
		var userid = req.query.userid;
		var teamname = req.query.teamname;

		if(userid && teamname){
			let team_ref = firebase.database().ref("teams");

			//First we check if teamname already exists
			team_ref.orderByChild("teamname").equalTo(teamname).once("value", function(snapshot) {
				if(snapshot.val()){
					res.json({
						success: false,
						errorCode: TEAM_CREATIONS_ERRORS.teamname_exists.id
					});
				}
				else {
					Team.createNewTeam(teamname, userid)
						.then((team) => {

							let playerIds = [];
							let player_ref = firebase.database().ref("players");
							for(let player of team.players) {
								let player_uid = shortid.generate(); //Generate unique id for the new player
								player_ref.child(player_uid).set(player.toJSON()); //Add the player to the database
								playerIds.push(player_uid); //Add id to array that will be saved in team objects
							}

							let team_uid = shortid.generate();
							let teamJSON = team.toJSON();

							teamJSON['players'] = playerIds;
							team_ref.child(team_uid).set(teamJSON);

							res.json({
								success: true,
								teamId: team_uid
							});
						}
					);
				}
			});
		}
		else {
			res.json({
				success: false,
				errorCode: TEAM_CREATIONS_ERRORS.info_missing.id
			});
		}
	});

	return api;
}
