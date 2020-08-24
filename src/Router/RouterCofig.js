import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React from 'react';

// import Login from './components/Login.js';
import Loginregister from '../components/LoginRegister/Loginregister.js';
import Index from '../components/index/Index.js';


let routes =[
    {
        path:'/',
        component:Loginregister,
        exact:true 
    },
    {
          path:'/index',
          component:Index
    }

]
class RouterCofig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
                <div>
                    {
                        routes.map((route,key)=>{
                          return route.exact ? <Route key={key} exact path={route.path} component={route.component} /> : <Route key={key} path={route.path} component={route.component} />;
                        })
                    }
                </div>
            </Router>
        );
    }
}

export default RouterCofig;