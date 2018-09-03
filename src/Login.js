import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import createHistory from "history/createBrowserHistory";
import { Redirect } from 'react-router';
const history = createHistory();

const FormItem = Form.Item;
class Login extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.register = this.register.bind(this);
    this.main = this.main.bind(this);
      }

 register(){
history.replace("/Register")

 }
  main = () => {

this.props.history.push("/main")

 }

   render() {

          return (
            <div  align="center">
      <Form className="login-form"  style={{ width: '300px'}}>
        <FormItem>

            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} id="first" placeholder="Username" />

        </FormItem>
        <FormItem>

            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} id="Second" type="password" placeholder="Password" />

        </FormItem>
        <FormItem>

            <Checkbox>Remember me</Checkbox>

            <Button type="primary " onClick={this.main}  htmlType="submit" className="login-form-button">
              Log in
            </Button>

        </FormItem>
        <FormItem>

                  <a className="login-form-forgot" href="">Forgot password</a>

        Or <Link to="/Register" >register now!</Link>
        </FormItem>
      </Form>

</div>
                );
       }
     }
const WrappedLogin = Form.create()(Login);


export default Login;
