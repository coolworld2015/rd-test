import React, {Component} from 'react';
import ListItem from './ListItem';

class Clients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'CoolWorld',
            clients: []
        }
    }

    componentDidMount() {
        this.getClients();
    }

    getClients() {
        fetch('http://ui-warehouse.herokuapp.com/api/clients/get')
            .then((response)=> response.json())
            .then((responseData)=> {
                this.setState({
                    clients: responseData.sort(this.sort),
                    resultsCount: responseData.length
                });
            })
            .catch((error)=> {
                this.setState({
                    serverError: true
                });
            })
    }

    sort(a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0;
    }

    changeHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    showClients() {
        return this.state.clients.map(function (item) {
            return <ListItem id={item.id} name={item.name} key={item.id}/>
        })
    }

    render() {
        return (
            <div>
                <div className="header">{this.state.name}</div>
                <hr />
                <input onChange={(event) => {
                    this.setState({
                        name: event.target.value
                    })
                }}/>
                <hr />

                <div className="header">Clients ({this.state.resultsCount})</div>
                <hr />

                {this.showClients()}

            </div>
        )
    }
}

module.exports = Clients;