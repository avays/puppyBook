
import React from 'react';
import { Link } from 'react-router';


export default class AllPuppies extends React.Component {

  render () {
    return (
      <div>
        <ul className="list-unstyled">
           { /* <li><a href="#">PUPPY NAME GOES HERE</a></li> */ }
           {
             this.props.allPuppies && this.props.allPuppies.map( puppy  => (
              <li key={puppy.id}>
                <Link to='#'>{puppy.name}</Link>
              </li>
             ))
           }
        </ul>
      </div>
    )
  }
}