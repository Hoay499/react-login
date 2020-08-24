import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css'
class Registersub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Form className="form  sign-u"
            {...this.state.layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
        >
            <h2>立即注册</h2>
                
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
{/* 
            <Form.Item {...this.state.tailLayout} name="remember" valuePropName="checked" className="appendelse">
                <Checkbox>Remember me</Checkbox>
               
            </Form.Item>
            <p className="forgot-pass"><a href="#">忘记密码？</a></p> */}
            <Form.Item {...this.state.tailLayout}>
                <Button type="primary" htmlType="submit" className='loginsubmit'>
                    注 册
</Button>
            </Form.Item>
        </Form>
        //     <div className="form sign-up">
        //     <h2>立即注册</h2>
        //     <label>
        //         <span>用户名</span>
        //         <input type="text" />
        //     </label>
        //     <label>
        //         <span>邮箱</span>
        //         <input type="email" />
        //     </label>
        //     <label>
        //         <span>密码</span>
        //         <input type="password" />
        //     </label>
        //     <button type="button" className="submit">注 册</button>
        //     <button type="button" className="fb-btn">使用 <span>facebook</span> 帐号注册</button>
        // </div>
        );
    }
}

export default Registersub;