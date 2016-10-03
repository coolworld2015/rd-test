import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
        }
    }

    getUser() {
        if (this.state.username == undefined ||
            this.state.password == undefined) {
            this.setState({
                badCredentials: true
            });
            return;
        }

        this.setState({
            showProgress: true
        });

        fetch('http://ui-base.herokuapp.com/api/users/findByName/'
            + this.state.username, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response)=> response.json())
            .then((responseData)=> {
                if (this.state.password == responseData.pass) {

                    this.setState({
                        badCredentials: false
                    });

                    this.props.onLogin().bind(this);

                } else {
                    this.setState({
                        badCredentials: true
                    });
                }
            })
            .catch((error)=> {
                this.setState({
                    badCredentials: true
                });
            })
            .finally(()=> {
                this.setState({
                    showProgress: false
                });
            });
    }

    render() {
        var errorCtrl;

        if (!this.state.success && this.state.badCredentials) {
            errorCtrl = <div>
                That username and password combination did not work
            </div>;
        }
        //
        // if (!this.state.success && this.state.unknownError) {
        //     errorCtrl = <Text style={styles.error}>
        //         We experienced an unexpected issue
        //     </Text>;
        // }

        return (
            <div>
                <div onClick={this.onLoginPressed.bind(this)}>
                    LOGIN
                </div>

                <div onClick={this.getUser.bind(this)}>
                    getUser
                </div>
                {errorCtrl}
            </div>

            // <ScrollView>
            //     <View style={styles.container}>
            //         <Image style={styles.logo}
            //                source={require('../../../logo.jpg')}
            //         />
            //         <Text style={styles.heading}>RN-Base</Text>
            //         <TextInput
            //             onChangeText={(text)=> this.setState({
            //                 username: text,
            //                 badCredentials: false
            //             })}
            //             style={styles.loginInput}
            //             placeholder="Login">
            //         </TextInput>
            //
            //         <TextInput
            //             onChangeText={(text)=> this.setState({
            //                 password: text,
            //                 badCredentials: false
            //             })}
            //             style={styles.loginInput}
            //             placeholder="Password" secureTextEntry={true}>
            //         </TextInput>
            //
            //         <TouchableHighlight
            //             onPress={this.onLoginPressed.bind(this)}
            //             //onPress={()=> this.getUser()}
            //             style={styles.button}>
            //             <Text style={styles.buttonText}>Log in</Text>
            //         </TouchableHighlight>
            //
            //         {errorCtrl}
            //
            //         <ActivityIndicator
            //             animating={this.state.showProgress}
            //             size="large"
            //             style={styles.loader}
            //         />
            //     </View>
            // </ScrollView>
        )
    }

    onLoginPressed() {
        this.props.onLogin();
    }
}

export default Login;
