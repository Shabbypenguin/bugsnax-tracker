import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Table from 'react-bootstrap/Table'



function BugsnaxList() {
	let snaxList = null
	let headers = ["ID", "Name", "Location"]
	let [fullsnaxlist, setfullsnaxlist] = useState([])
	
	const getbugsnaxlist = () => {
		fetch("https://bugsnax-api-project.glitch.me/bugsnax/")
		.then(response => response.json())
		.then(result => {
			console.log(result.bugsnax)
			setfullsnaxlist(result)
			console.log(fullsnaxlist)
		})
		.catch(error => console.log('error', error))
		.finally( () => {console.log(fullsnaxlist)})
	}
	
	useEffect(() => {
		getbugsnaxlist()
	}, [snaxList])

	
	return (
		<div>
			<h2>All Available Bugsnax:</h2>
			<ul>{fullsnaxlist.name}</ul>
		<Table responsive>
			<thead>
				<tr>
					<th></th>
						{headers.map((header, index) => (
						<th key={index}>{header}</th>
						))}	
				</tr>
				
				
				<tr>
					<th></th>
						{headers.map((header, index) => (
						<th key={index}>{header}</th>
		))}		
				</tr>
					</thead>
		</Table>
		</div>
	)
}

//			<ul>{fullsnaxlist}</ul>

export default BugsnaxList