import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>RD-TEST</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <Link to="/home" className="btn btn-primary btn-lg">Home</Link>
          {" | "}
          <Link to="/about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

export default HomePage;
