import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import Random from './random.js'
import Button from 'react-bootstrap/Button';
import '../App.css';



function BugSnaxer() {
	
	useEffect(() => {
		document.title = "Bugsnax Tracker"
	}, []);
	
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
		<div style={{textAlign: 'center'}}>
		<h1>Welcome to Snacktooth island! A place full of friendship, fun and mystery. <br></br>Famed explorer Elizabert Megafig has called on you to write a story and publish to the world her newest findings. What will you find when you get there? </h1>
		</div>
		<br></br>
		<br></br>
		<img alt=""	className="map" src="../images/SnaktoothIslandMap.jpeg"></img>
		</div>
	)
	
	
	
}

export default BugSnaxer