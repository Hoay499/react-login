import React from 'react';
import {Redirect} from 'react-router-dom';
import { Form, Input, Checkbox, Button } from 'antd';


// import './style2.scss';
// import './style.css';
// import $ from './code/jquery-1.10.2.js';
import $ from 'jquery';
import code from  '../code/code.js'
import Index from '../index/Index.js'
import LocalStorage from '../localstorage/LocalStorage.js'
class Loginsub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            // foemRef:{}
            loginflag:false,
            loginItem:{}
        };
    }
    
    onFinish = values => {
        console.log('onfinnish',values);
        console.log('ref',this.refs.formRef);
        // let aa = this.refs.formRef.getFieldValue('username');
        // console.log('username',aa);
        // let username=values.username;
        // let password =values.password;
        let {username,password,code,remember} = values;
       
        // console.log(username);
        if (this.checkCode(code) && this.login(username,password)){ 
            LocalStorage.set('loginItem',values);
            // !remember && LocalStorage.remove('loginItem');
            this.setState({
                loginflag:true
            })
           
            
        }   
        else{
            alert('登录失败！');
        }

    };
    login=(username,password)=>{
        if(username=='admin'&&password=='123')
          return true;
        return false;
    }
    checkCode=(val)=>{
         // 将输入的内容转为大写，可通过这步进行大小写验证
        //  var val = $(".input-val").val().toLowerCase();
         // 获取生成验证码值
         var num = $('#canvas').attr('data-code');
         if (val == '') {
             alert('请输入验证码！');
         } else if (val == num) {
            //  alert('提交成功！');
             $(".input-val").val('');
             return true;
             // draw(show_num);
     
         } else {
             alert('验证码错误！请重新输入！');
             $(".input-val").val('');
             return false;
             // draw(show_num);
         }
    }
    componentDidMount=()=>{
        const loginItemc = LocalStorage.get('loginItem');
        // console.log('loginitem',loginItemc);
        if(loginItemc && loginItemc.remember){
            // this.setState({
            //     loginItem:loginItemc
            // })  
            delete loginItemc.code;
            this.refs.formRef.setFieldsValue(loginItemc);
        }
        code.code_draw();
        //dom操作放在这个里面    请求数据也放在这个里面
        $("#canvas").on('click', function() {
            code.code_draw();
        })
        
        $(".btn").on('click', function() {
            // 将输入的内容转为大写，可通过这步进行大小写验证
            var val = $(".input-val").val().toLowerCase();
            // 获取生成验证码值
            var num = $('#canvas').attr('data-code');
            if (val == '') {
                alert('请输入验证码！');
            } else if (val == num) {
                alert('提交成功！');
                $(".input-val").val('');
                // draw(show_num);
        
            } else {
                alert('验证码错误！请重新输入！');
                $(".input-val").val('');
                // draw(show_num);
            }
        })
        console.log('04组件将要挂载');
    }
    render() {
        if(this.state.loginflag)
          return <Redirect to={{pathname:'/Index'}} />;
        return (

            <Form className="form sign-in"
            {...this.state.layout}
            ref='formRef'
            name="basic"
            initialValues={{
                username: this.state.username,
                password:this.state.password,
                remember: this.state.remember,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
        
        >
            <h2>欢迎回来</h2>
                
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
               label=''
                // name="code"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
            <Form.Item   
                name="code"
                noStyle
                rules={[
                    {
                        required: true,
                        message: 'Please input your Verification Code!',
                    },
                ]}
               
            >
               <Input  value="" placeholder="请输入验证码（不区分大小写）" className="input-val" />
               </Form.Item>
               <canvas id="canvas" width="100" height="43"></canvas>
            </Form.Item>

            <Form.Item  >
            <Form.Item {...this.state.tailLayout} name="remember" valuePropName='checked' className="appendelse">
                <Checkbox>Remember me</Checkbox>
              
                </Form.Item>
                 <p className="forgot-pass"><a href="#">忘记密码？</a></p>
            
            </Form.Item>
           
            <Form.Item {...this.state.tailLayout}>
      <Button  htmlType="submit" className='loginsubmit' onClick={this.login}>
                    登 录
</Button>
            </Form.Item>
        </Form>
            // <div className="form sign-in">
            //     <h2>欢迎回来</h2>
            //     <label>
            //         <span>邮箱</span>
            //         <input type="email" />
            //     </label>
            //     <label>
            //         <span>密码</span>
            //         <input type="password" />
            //     </label>
            //     <p className="forgot-pass"><a href="#">忘记密码？</a></p>
            //     <button type="button" className="submit">登 录</button>
            //     <button type="button" className="fb-btn">使用 <span>facebook</span> 帐号登录</button>
            // </div>
        );
    }
}

export default Loginsub;