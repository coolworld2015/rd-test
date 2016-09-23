// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <Link to="/home" className="btn btn-primary btn-lg">Home</Link>
                {" | "}
                <Link to="/about" className="btn btn-primary btn-lg">About</Link>
                {" | "}
                <Link to="/clients" className="btn btn-primary btn-lg">Clients</Link>
                {this.props.children}
            </div>
        );
    }
}

export default App;
