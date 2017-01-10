import React, { Component } from 'react';
import '../sass/Table.sass'
export default class Tablerow extends Component {
	render(){
		
		return (
			<tr className>
				<td className="number">{this.props.number}</td>
				<td><img src={this.props.entry.img}/><a href={'https://freecodecamp.com/' + this.props.entry.username}>{this.props.entry.username}</a></td>
				<td>{this.props.entry.recent}</td>
				<td>{this.props.entry.alltime}</td>
			</tr>
		)
	}
}
