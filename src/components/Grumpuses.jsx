import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Grumpuses(props) {
	
	let [currentgrumpusesname, setgrumpusesname] = useState(null)
	let [currentgrumpusesid, setgrumpusesid] = useState(null)
	let [currentgrumpuseslocation, setgrumpuseslocation] = useState(null)
	let [currentgrumpusesimage, setgrumpusesimage] = useState(null)
	console.log(props.match.params.id)
	
	function getGrumpus(id) {
		fetch(`https://bugsnax-api-project.glitch.me/grumpuses/${props.match.params.id}`)
		.then(response => response.json())
		.then(result => {
			console.log(result[0])
			setgrumpusesname(currentgrumpusesname = result[0].name)
			setgrumpusesid(currentgrumpusesid = result[0].id)
			setgrumpusesimage(currentgrumpusesimage = `/images/grumpuses/${result[0].id}_grumpus.png`)
			setgrumpuseslocation(currentgrumpuseslocation = result[0].locations[0].name)
		})
		.catch(error => console.log('error', error))
	}
	
	useEffect(() => {
			getGrumpus(props.match.params.id)
			
		return (
			<div>
			<Link to={'/grumpuses/' + getRandom(14)}><button>Get random Bugsnax</button></Link><br></br>
			{currentgrumpusesid}<br></br>
			{currentgrumpusesname}<br></br>
			{currentgrumpuseslocation}<br></br>
			<img alt="" src={currentgrumpusesimage}></img>
			
			</div>
		)
	},[props.match.params.id])
	
	function getRandom(max) {
		return Math.floor(Math.random() * max + 1)
	}
	
	return (
		<div>
		<Link to={'/grumpuses/' + getRandom(14)}><button>Get random Grumpus</button></Link><br></br>
		{currentgrumpusesid}<br></br>
		{currentgrumpusesname}<br></br>
		{currentgrumpuseslocation}<br></br>
		<img alt="" src={currentgrumpusesimage}></img>

		</div>
	)
}

export default Grumpuses