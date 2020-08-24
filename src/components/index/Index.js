import React from 'react';
import LocalStorage from '../localstorage/LocalStorage.js';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usernmae:''
         };
    }
    componentDidMount(){
        if(!LocalStorage.get('loginItem')) 
         return;
        console.log(LocalStorage.get('loginItem'));
        let username = LocalStorage.get('loginItem').username;
        if(username)
        this.setState({
            usernmae:username
        })
          
    }
    render() {
        if(!LocalStorage.get('loginItem')){
            return (<Redirect to='/' />)
        }
        return (
            <div>
                Hello{this.state.usernmae}
            </div>
        );
    }
}

export default Index;