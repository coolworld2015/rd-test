import React, {Component} from 'react';
import Search from './Search';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            isLoggedIn: false
        }
		
		window.appConfig = {
			url: 'http://ui-base.herokuapp.com/',
			search: {
                items: []
            }	
        };
    }
	
    render() {
		return (
		<div>
			<Search />
		</div>	
		)
    }
}

export default App;