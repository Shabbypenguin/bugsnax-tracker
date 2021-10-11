import React from 'react';
import db from '../data/bugsnax.json'
import { Link } from 'react-router-dom';
import headers from './headers/bugsnax.json'
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Random from './random.js'
import Button from 'react-bootstrap/Button';



function BugsnaxList() {

  const TableHeader = (props) => {
    const { headers } = props;
    return(
      <thead className="thead-dark" key="header-1">
      <tr key="header-0">
      { headers && headers.map((value, index) => {
        return <th key={index}><div>{value}</div></th>
      })}
      </tr>
      </thead>
    );
  }
  
  const TableBody = (props) => {
    const { headers, rows } = props;
    
    function buildRow(row, headers) {
      return (
        <tr key={row.id}>
        { headers.map((value, index) => {
          if (value === "Name"){
            return <td key={index}><b><Link to={`/bugsnax/${row.ID}`}>{row[value]}</Link></b></td>
          }else if (value === "Location"){
            switch (row.Location) {
              
              case "Garden Grove":
                return <td key={index}><b><Link to={`/locations/2`}>{row[value]}</Link></b></td>
                break;
              
              case "Flavor Falls":
                return <td key={index}><b><Link to={`/locations/3`}>{row[value]}</Link></b></td>
                break;
              
              case "Simmering Springs":
                return <td key={index}><b><Link to={`/locations/4`}>{row[value]}</Link></b></td>
                break;
              
              case "Boiling Bay":
                return <td key={index}><b><Link to={`/locations/5`}>{row[value]}</Link></b></td>
                break;
              
              case "Scorched Gorge":
                return <td key={index}><b><Link to={`/locations/6`}>{row[value]}</Link></b></td>
                break;
              
              case "Sizzlin' Sands":
                return <td key={index}><b><Link to={`/locations/7`}>{row[value]}</Link></b></td>
                break;
              
              case "Sugarpine Woods":
                return <td key={index}><b><Link to={`/locations/8`}>{row[value]}</Link></b></td>
                break;
              
              case "Frosted Peak":
                return <td key={index}><b><Link to={`/locations/9`}>{row[value]}</Link></b></td>
                break;
              default:
                return <td key={index}><b>{row[value]}</b></td>
                break;
            }
          }else {
            return <td key={index}><b>{row[value]}</b></td>
          }
        })}
        </tr>
      )
    };
    
    return(
      <tbody>
      { rows && rows.map((value) => {
        return buildRow(value, headers);
      })}
      </tbody>
    );
  }
  
  return (
    <div style={{ backgroundColor: '#CCCCCCCC'}}>
    <Link to={'/'}><Button variant="success">Go back home</Button></Link>
    <Link to={'/bugsnaxlist/'}><Button variant="success">Full list of Bugsnax</Button></Link>
    <Link to={'/bugsnax/' + Random(99)}><Button variant="success">Get random Bugsnax</Button></Link>
    <Link to={'/locations/'}><Button variant="success">Check out the various locations</Button></Link>
    <Link to={'/locations/' + Random(9)}><Button variant="success">Get a random location</Button></Link>
    <Link to={'/grumpuses/'}><Button variant="success">Find out more about the Grumpuses</Button></Link>
    <Link to={'/grumpuses/' + Random(14)}><Button variant="success">Get random Grumpus</Button></Link>
    <br></br>
    <h2>All Available Bugsnax:</h2>
    <Table striped bordered hover responsive>
    <TableHeader headers={Object.keys(headers)}></TableHeader>
    <TableBody headers={Object.keys(headers)} rows={db}></TableBody>
    </Table>
    </div>
  )
}


//<Link to={'/bugsnax/' + snax.id}></Link>



export default BugsnaxList