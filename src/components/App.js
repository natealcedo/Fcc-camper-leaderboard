import React, { Component } from 'react';
import 'whatwg-fetch';
import Table from './Table'


class App extends Component {
    constructor(){
        super()
        this.state = {
            top100: []
        }
    }

    componentWillMount() {
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(data => {
                return data.json();
            })
            .then(json => {
                this.setState({
                    top100: json
                });
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <Table top100={this.state.top100}></Table>
        );
    }
}

export default App;
