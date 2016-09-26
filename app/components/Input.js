import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text"
                       name={this.props.name}
                       className="className"
                       placeholder={this.props.placeholder}
                       ref={this.props.name}
                       onChange={(event) => {
                           this.setState({
                               inputTest: event.target.value
                           });
                       }}
                       value={this.props.value}/>
            </div>
        );
    }
}

export default Input;