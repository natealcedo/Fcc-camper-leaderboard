import React, { Component } from 'react';
import '../sass/Table.sass'
export default class Tablerow extends Component {
	render(){
		return (
			<tr className>
				<td className="number">{this.props.number}</td>
				<td>{this.props.entry.username}</td>
				<td>{this.props.entry.recent}</td>
				<td>{this.props.entry.alltime}</td>
			</tr>
		)
	}
}
