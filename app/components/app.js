// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {Link} from 'react-router'; 
 

class App extends React.Component {
  render() {
    return (
	
      <div className="container-fluid">
        <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
		{" | "}
		<Link to="/home" className="btn btn-primary btn-lg">Home</Link>
        {this.props.children}
      </div>
    );
  }
}

 

 
export default App;
