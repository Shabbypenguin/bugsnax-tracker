import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Random from './random.js'
import Button from 'react-bootstrap/Button';
import '../App.css';



function BugSnax(props) {
	
	let [currentbugsnaxname, setbugsnaxname] = useState(null)
	let [currentbugsnaxid, setbugsnaxid] = useState(null)
	let [currentbugsnaxlocation, setbugsnaxlocation] = useState(null)
	let [currentbugsnaximage, setbugsnaximage] = useState(null)
	
	function getBugSnax(id) {
		fetch(`https://bugsnax-api-project.glitch.me/bugsnax/${props.match.params.id}`)
		.then(response => response.json())
		.then(result => {
			console.log(result[0])
			setbugsnaxname(currentbugsnaxname = result[0].Name)
			setbugsnaxid(currentbugsnaxid = result[0].ID)
			setbugsnaximage(currentbugsnaximage = `/images/bugsnax/${result[0].ID}_sticker.png`)
			setbugsnaxlocation(currentbugsnaxlocation = result[0].Location)
		})
		.catch(error => console.log('error', error))
	}
	
	useEffect(() => {
			getBugSnax(props.match.params.id)
			
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
			{currentbugsnaxid}<br></br>
			{currentbugsnaxname}<br></br>
			{currentbugsnaxlocation}<br></br>
			<img alt="" src={currentbugsnaximage}></img>
			
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
		<img alt=""  className="snaxportrait" src={currentbugsnaximage}></img>
		<div style={{textAlign: 'center'}}>
		<h1><b>{currentbugsnaxname}</b></h1>
		<br></br>
		<h3> Can be found at: {currentbugsnaxlocation}</h3>
		</div>
		<br></br>

		</div>
	)
}

export default BugSnax