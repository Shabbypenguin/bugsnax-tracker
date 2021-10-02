import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function BugSnaxer() {
	let [currentlocationsname, setlocationsname] = useState(null)
	let [currentlocationsid, setlocationsid] = useState(null)
	let [currentlocationslocation, setlocationslocation] = useState(null)
	let [currentlocationsimage, setlocationsimage] = useState(null)
	let [currentgrumpusesname, setgrumpusesname] = useState(null)
	let [currentgrumpusesid, setgrumpusesid] = useState(null)
	let [currentgrumpuseslocation, setgrumpuseslocation] = useState(null)
	let [currentgrumpusesimage, setgrumpusesimage] = useState(null)
	let [snaxatlocation, setsnaxatlocation] = useState(null)
	let [grumpusatlocation, setgrumpusatlocation] = useState(null)
	
	
	function getfullbugsnax() {
		
		fetch("https://rambunctious-oasis-tuesday.glitch.me/bugsnax")
		.then(response => response.json())
		.then(result => console.log(result.bugsnax))
		.catch(error => console.log('error', error))
	}
	

	
	function getRandom(max) {
		return Math.floor(Math.random() * max + 1)
	}
	
	function getfulllocations() {
		
		fetch("https://rambunctious-oasis-tuesday.glitch.me/locations")
		.then(response => response.json())
		.then(result => console.log(result.locations))
		.catch(error => console.log('error', error))
	}
	
	function getlocations(requested) {
		
		fetch(`https://bugsnax-api-project.glitch.me/locations/${requested}`)
		.then(response => response.json())
		.then(locationresult => {
			setlocationsname(currentlocationsname = locationresult[0].name)
			setlocationsimage(currentlocationsimage = `/images/locations/${locationresult[0].id}_sticker.png`)
			setgrumpusatlocation(locationresult[0].inhabitants.map(grumpus => <li key={grumpus.id}><b>{grumpus.name}</b></li>))
			setsnaxatlocation(locationresult[0].bugsnax.map(snax => 
				<li key={snax.id}> 
				<Link to={'/bugsnax/' + snax.id}>
				{snax.name}
				</Link></li> 
			))
		})
	}
	
	function getfullgrumpuses() {
		
		fetch("https://bugsnax-api-project.glitch.me/grumpuses")
		.then(response => response.json())
		.then(result => console.log(result.grumpuses))
		.catch(error => console.log('error', error))
	}
	
	function getgrumpuses(requested) {
		
		fetch(`https://bugsnax-api-project.glitch.me/grumpuses/${requested}`)
		.then(response => response.json())
		.then(result => {
			console.log(result[0])
			setgrumpusesname(currentgrumpusesname = result[0].name)
			setgrumpusesid(currentgrumpusesid = result[0].id)
			setgrumpusesimage(currentgrumpusesimage = `/images/grumpuses/${result[0].id}_sticker.png`)
			setgrumpuseslocation(currentgrumpuseslocation = result[0].location.name)
		})
		.catch(error => console.log('error', error))
	}
	

	
	
	return (
		<div>
		<button onClick={getfullbugsnax}>Full list of Bugsnax</button>
		<button onClick={() => {getlocations(getRandom(8))}}>Get random location</button>  
		<button onClick={() => {getgrumpuses(getRandom(8))}}>Get random Grumpus</button>
		<br></br>
		
		<h2>Grumpuses at this location:</h2>
		<ul>{grumpusatlocation}</ul>
		<h2>Bugsnax at this location:</h2>
		<ul>{snaxatlocation}</ul>
		<br></br>

		</div>
	)
	
	
	
}

export default BugSnaxer