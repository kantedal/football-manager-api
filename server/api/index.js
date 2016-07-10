import { Router } from 'express';
import facets from './facets';
import { Team } from '../models/team';

export default function() {
	var api = Router();

	// mount the facets resource
	api.use('/facets', facets);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	api.get('/new_team', (req, res) => {
		//let team = Team.createNewTeam("IFK Kuk", "Mr Kuk");

		let team = Team.createNewTeam("Test FC", "Mr Testsson");
		res.json({
			hello: "yes hesllo plesase"
		});
	});

	return api;
}
