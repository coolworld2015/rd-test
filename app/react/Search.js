import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			invalidValue: false,
			type: 'Search by phone',
			items: []
		}
    }
	
	goSearch() {
		if (this.state.name == '' || this.state.name == undefined) {
			this.setState({
				invalidValue: true
			});
			return;
		}

        this.setState({
            showProgress: true
        });
		
		var webUrl;
		if (this.state.type == 'Search by phone') {
			webUrl = 'api/items/findByPhone/'
		} else {
			webUrl = 'api/items/findByName/'
		}
		
		fetch(appConfig.url + webUrl + this.state.name, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response)=> response.json())
            .then((responseData)=> {
				appConfig.search.items = responseData.sort(this.sort);
                this.setState({
                    items: (responseData.sort(this.sort)).slice(0, 20),
                    filteredItems: responseData.sort(this.sort),
                    resultsCount: appConfig.search.items.length,
					showProgress: false
                });

            })
            .catch((error)=> {
                this.setState({
                    serverError: true,
					showProgress: false
                });
            })	
	}
	
	clearSearch() {
		this.refs.username.value = '';
		this.setState({
            name: '',
			items: [],
			invalidValue: false
        });
	}
	
    findByPhone() {
		this.setState({
            showProgress: true
        });
		
		var webUrl;
		if (this.state.type == 'Search by phone') {
			webUrl = 'api/items/findByPhone/'
		} else {
			webUrl = 'api/items/findByName/'
		}
		
		fetch(appConfig.url + webUrl + this.state.name, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response)=> response.json())
            .then((responseData)=> {
				appConfig.search.items = responseData.sort(this.sort);
                this.setState({
                    items: (responseData.sort(this.sort)).slice(0, 20),
                    filteredItems: responseData.sort(this.sort),
                    resultsCount: appConfig.search.items.length,
					showProgress: false
                });

            })
            .catch((error)=> {
                this.setState({
                    serverError: true,
					showProgress: false
                });
            })
    }
	
    render() {
        var showResult, errorCtrl, validCtrl, loading;
		
        if (this.state.items.length>0) {
            showResult = <div className="loading" style={{
				textAlign: 'center',
				top: 200,
				position: 'static',
				fontSize: '30px',
				fonWeight: 'bold'
			}}>
				{this.state.items[0].name}
			</div>;
        }

        if (this.state.serverError) {
            errorCtrl = <div className="valid">
				Something went wrong.
			</div>;
        }

        if (this.state.invalidValue) {
            validCtrl = <div className="valid">
				Value required - please provide.
				<br/><br/>
			</div>;
        }
				
        if (this.state.showProgress) {
            loading = <div className="loading">
                <span>Loading...</span>
            </div>;
        }
		
        return (
			<div>				
				<center>		
                <div className="header">
					Search
				</div>
				
				<div className="form">
					<div>
						<select className="input"
							onChange={(event) => {
								this.setState({
									type: event.target.value,
									invalidValue: false
								})
							}}>
							<option value="Search by phone">Search by phone</option>
							<option value="Search by name">Search by name</option>
						</select>
					</div>					
					<hr className="splitter" />
					<div>
						<input type="text" 
							className="input"
							ref="username"
							onChange={(event) => {
								this.setState({
									name: event.target.value,
									invalidValue: false
								})
							}}
							placeholder="Search"/>
					</div>
				</div>
				
				{errorCtrl}
				{loading}
				
				<div>
					<br/>
					{validCtrl}
					
					<button onClick={this.goSearch.bind(this)} className="button">
						Submit
					</button>					
 				
					<button onClick={this.clearSearch.bind(this)} className="button">
						Clear
					</button>
				</div>		
				
				{showResult}
				
				</center>				
			</div>
        );
    }
}

export default Search;