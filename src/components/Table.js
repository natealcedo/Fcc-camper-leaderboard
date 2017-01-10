import React, { Component } from 'react';
import Tablerow from './Tablerow'
import '../sass/Table.sass'

export default class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<caption className="title">LeaderBoard</caption>
					<tr>
						<td className="number">#</td>
						<td className="camperName">Camper Name</td>
						<td className="point">Points in past 30 days</td>
						<td>All time points</td>
					</tr>
				</thead>

				<tbody>
					{
						this.props.top100
							.map((entry, key) => {
								return (
									<Tablerow key={key} number={key + 1} entry={entry} />
								)
							})
					}
				</tbody>
			</table>
		)
	}
}