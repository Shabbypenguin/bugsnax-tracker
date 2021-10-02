import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Table from 'react-bootstrap/Table'



function BugsnaxList() {
	let snaxList = ""
	let [fullsnaxlist, setfullsnaxlist] = useState([])
	
	useEffect(() => {
		fetch("https://bugsnax-api-project.glitch.me/bugsnax/")
		.then(response => response.json())
		.then(result => {
			console.log(result.bugsnax)
			setfullsnaxlist(result.bugsnax.map(snax => 				
				<li key={snax.id}> <input type="checkbox" />
				<b><Link to={'/bugsnax/' + snax.id}>
				{snax.name}
				</Link></b></li>
			))
			console.log(fullsnaxlist)
		})
		.catch(error => console.log('error', error))
	}, [])

	
	return (
		<div>
			<h2>All Available Bugsnax:</h2>
			<ul>{fullsnaxlist}</ul>
		<Table responsive>
			<thead>
				<tr>
					<th>1</th>
						{Array.from({ length: 3 }).map((_, index) => (
						<th key={index}>Table heading</th>
						))}	
				</tr>
			</thead>
			</Table>
		</div>
	)
}

//			<ul>{fullsnaxlist}</ul>

export default BugsnaxList