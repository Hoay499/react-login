import React from 'react';
// import './style.css'

import 'antd/dist/antd.css';
import './style2.scss';
import './Loginsub.js'
import Loginsub from './Loginsub.js';
import Registersub from './Registersub.js';

class Loginregister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    switch=()=>{
        document.querySelector('.content').classList.toggle('s--signup')
    }
    
    render() {
        return (
            <div className="content">
        <Loginsub/>
        <div className="sub-cont">
            <div className="img">
                <div className="img__text m--up">
                    <h2>还未注册？</h2>
                    <p>立即注册，发现大量机会！</p>
                </div>
                <div className="img__text m--in">
                    <h2>已有帐号？</h2>
                    <p>有帐号就登录吧，好久不见了！</p>
                </div>
                <div className="img__btn" onClick={this.switch}>
                    <span className="m--up">注 册</span>
                    <span className="m--in">登 录</span>
                </div>
            </div>
          <Registersub/>
        </div>
    </div>

           
        );
    }
}

export default Loginregister;
