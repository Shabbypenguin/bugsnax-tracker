import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function BugSnax(props) {
	
	let [currentbugsnaxname, setbugsnaxname] = useState(null)
	let [currentbugsnaxid, setbugsnaxid] = useState(null)
	let [currentbugsnaxlocation, setbugsnaxlocation] = useState(null)
	let [currentbugsnaximage, setbugsnaximage] = useState(null)
	console.log(props.match.params.id)
	
	function getBugSnax(id) {
		fetch(`https://bugsnax-api-project.glitch.me/bugsnax/${props.match.params.id}`)
		.then(response => response.json())
		.then(result => {
			console.log(result[0])
			setbugsnaxname(currentbugsnaxname = result[0].name)
			setbugsnaxid(currentbugsnaxid = result[0].id)
			setbugsnaximage(currentbugsnaximage = `/images/bugsnax/${result[0].id}_sticker.png`)
			setbugsnaxlocation(currentbugsnaxlocation = result[0].location.name)
		})
		.catch(error => console.log('error', error))
	}
	
	useEffect(() => {
			getBugSnax(props.match.params.id)
			
		return (
			<div>
			<Link to={'/bugsnax/' + getRandom(100)}><button>Get random Bugsnax</button></Link><br></br>
			{currentbugsnaxid}<br></br>
			{currentbugsnaxname}<br></br>
			{currentbugsnaxlocation}<br></br>
			<img alt="" src={currentbugsnaximage}></img>
			
			</div>
		)
	},[props.match.params.id])
	
	function getRandom(max) {
		return Math.floor(Math.random() * max + 1)
	}
	
	return (
		<div>
		<Link to={'/bugsnax/' + getRandom(100)}><button>Get random Bugsnax</button></Link><br></br>
		{currentbugsnaxid}<br></br>
		{currentbugsnaxname}<br></br>
		{currentbugsnaxlocation}<br></br>
		<img alt="" src={currentbugsnaximage}></img>

		</div>
	)
}

export default BugSnax