import React, {Component} from 'react';
import {Link} from 'react-router';

class ClientDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

console.log(this.props.routeParams);
    }

    render() {
        return (
            <div>
                {this.props.routeParams.id} <br />
                {this.props.routeParams.name}
            </div>
        );
    }
}

export default ClientDetails;