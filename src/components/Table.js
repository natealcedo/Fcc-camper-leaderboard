import React, { Component } from 'react';
import Tablerow from './Tablerow'
import '../sass/Table.sass'

export default class Table extends Component {
	constructor() {
		super();
		this.state = {
			allTime: true
		}

	}
	sortByTop30(e) {
		if(this.state.allTimefalse){
			return;
		}
		e.preventDefault();
		this.setState({
			allTime: false
		})
	}
	sortByAllTime(e){
		e.preventDefault();
		this.setState({
			allTime: true
		})
	}
	render() {
		return (
			<table>
				<thead>
					<caption className="title">LeaderBoard</caption>
					<tr>
						<td className="number">#</td>
						<td className="camperName">Camper Name</td>
						<td className="point" onClick={this.sortByTop30.bind(this)}><a href="#">Points in past 30 days</a></td>
						<td onClick={this.sortByAllTime.bind(this)}><a href="#">All time points</a></td>
					</tr>
				</thead>

				<tbody>
					{
						(() => {
							if (this.state.allTime) {
								return this.props.top100
									.sort((a, b) => {
										return b.alltime - a.alltime
									})
									.map((entry, key) => {
										return (
											<Tablerow key={key} number={key + 1} entry={entry} />
										)
									})
							}
							else {
								return this.props.top100
									.sort((a, b) => {
										return b.recent - a.recent
									})
									.map((entry, key) => {
										return (
											<Tablerow key={key} number={key + 1} entry={entry} />
										)
									})
							}

						})()
					}
				</tbody>
			</table>
		)
	}
}