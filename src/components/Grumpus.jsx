import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Random from './random.js'
import Button from 'react-bootstrap/Button';
import '../App.css';



function Grumpuses(props) {
	
	let [currentgrumpusesname, setgrumpusesname] = useState(null)
	let [currentgrumpusesid, setgrumpusesid] = useState(null)
	let [currentgrumpuseslocation, setgrumpuseslocation] = useState(null)
	let [currentgrumpuseslocationid, setgrumpuseslocationid] = useState(null)
	let [currentgrumpusesimage, setgrumpusesimage] = useState(null)
	
	function getGrumpus(id) {
		fetch(`https://bugsnax-api-project.glitch.me/grumpuses/${props.match.params.id}`)
		.then(response => response.json())
		.then(result => {
			console.log(result[0])
			setgrumpusesname(currentgrumpusesname = result[0].name)
			setgrumpusesid(currentgrumpusesid = result[0].id)
			setgrumpusesimage(currentgrumpusesimage = `/images/grumpus/${result[0].id}_grumpus.png`)
			setgrumpuseslocation(currentgrumpuseslocation = result[0].locations[0].name)
			setgrumpuseslocationid(currentgrumpuseslocationid = result[0].locations[0].id)
		})
		.catch(error => console.log('error', error))
	}
	
	useEffect(() => {
			getGrumpus(props.match.params.id)
			
		return (
			<div>
			<Link to={'/'}><Button variant="success">Go back home</Button></Link>
			<Link to={'/bugsnaxlist/'}><Button variant="success">Full list of Bugsnax</Button></Link>
			<Link to={'/bugsnax/' + Random(99)}><Button variant="success">Get random Bugsnax</Button></Link>
			<Link to={'/locations/'}><Button variant="success">Check out the various locations</Button></Link>
			<Link to={'/locations/' + Random(9)}><Button variant="success">Get a random location</Button></Link>
			<Link to={'/grumpuses/'}><Button variant="success">Find out more about the Grumpuses</Button></Link>
			<Link to={'/grumpuses/' + Random(14)}><Button variant="success">Get random Grumpus</Button></Link>
			<br></br>
			{currentgrumpusesid}<br></br>
			{currentgrumpusesname}<br></br>
			{currentgrumpuseslocation}<br></br>
			<img alt="" src={currentgrumpusesimage}></img>
			
			</div>
		)
	},[props.match.params.id])
	
	return (
		<div className="layer">
		<Link to={'/'}><Button variant="success">Go back home</Button></Link>
		<Link to={'/bugsnaxlist/'}><Button variant="success">Full list of Bugsnax</Button></Link>
		<Link to={'/bugsnax/' + Random(99)}><Button variant="success">Get random Bugsnax</Button></Link>
		<Link to={'/locations/'}><Button variant="success">Check out the various locations</Button></Link>
		<Link to={'/locations/' + Random(9)}><Button variant="success">Get a random location</Button></Link>
		<Link to={'/grumpuses/'}><Button variant="success">Find out more about the Grumpuses</Button></Link>
		<Link to={'/grumpuses/' + Random(14)}><Button variant="success">Get random Grumpus</Button></Link>
		<br></br>
		<br></br>
		<img alt=""  className="portrait" src={currentgrumpusesimage}></img>
		<div style={{textAlign: 'center'}}>
		<h1><b>{currentgrumpusesname}</b></h1><br></br>
		<h3>You can find them at: <Link to={'/locations/' + currentgrumpuseslocationid}>{currentgrumpuseslocation}</Link></h3><br></br>
		</div>
		
		</div>
	)
}

export default Grumpuses