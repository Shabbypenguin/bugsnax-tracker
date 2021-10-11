import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Random from './random.js'
import Button from 'react-bootstrap/Button';
import '../App.css';


function Location(props) {
	
	let [currentlocationname, setlocationname] = useState(null)
	let [currentlocationid, setlocationid] = useState(null)
	let [currentlocationimage, setlocationimage] = useState(null)
	
	function getLocation(id) {
		fetch(`https://bugsnax-api-project.glitch.me/locations/${props.match.params.id}`)
		.then(response => response.json())
		.then(result => {
			console.log(result[0])
			setlocationname(currentlocationname = result[0].name)
			setlocationid(currentlocationid = result[0].id)
			setlocationimage(currentlocationimage = `/images/locations/${result[0].id}_location.png`)
		})
		.catch(error => console.log('error', error))
	}
	
	useEffect(() => {
			getLocation(props.match.params.id)
			
		return (
			<div className="layer">
			<Link to={'/'}><Button variant="success">Go back home</Button></Link>
			<Link to={'/bugsnaxlist/'}><Button variant="success">Full list of Bugsnax</Button></Link>
			<Link to={'/bugsnax/' + Random(99)}><Button variant="success">Get random Bugsnax</Button></Link>
			<Link to={'/locations/'}><Button variant="success">Check out the various locations</Button></Link>
			<Link to={'/locations/' + Random(9)}><Button variant="success">Get a random location</Button></Link>
			<Link to={'/grumpuses/'}><Button variant="success">Find out more about the Grumpuses</Button></Link>
			<Link to={'/grumpuses/' + Random(14)}><Button variant="success">Get random Grumpus</Button></Link>
			<h4>{currentlocationname}</h4><br></br>
			<img alt="" src={currentlocationimage}></img>
			
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
		<br></br><br></br>


		<img alt="" className="picture" src={currentlocationimage}></img>
		<div style={{textAlign: 'center'}}>
		<h1><b>{currentlocationname}</b></h1>
		<br></br>
		</div>


		</div>
	)
}

export default Location