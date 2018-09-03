import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import createHistory from "history/createBrowserHistory";

const history = createHistory();
const FormItem = Form.Item;
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      Secondname:'',
      Email:'',
      Password:'',
      Passwor:'',
      value: ''
    }
    this.handleClick = this.handleClick.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleChang = this.handleChang.bind(this);
     this.handleChan = this.handleChan.bind(this);
     this.handleCha = this.handleCha.bind(this);
     this.handleCh = this.handleCh.bind(this);
  }

  handleChange(event) {
    this.setState({firstname: event.target.value});
  }
  handleChang(event) {
    this.setState({Secondname: event.target.value});
  }
  handleChan(event) {
    this.setState({Email: event.target.value});
  }
  handleCha(event) {
    this.setState({password: event.target.value});
  }
  handleCh(event) {
    this.setState({passwor: event.target.value});
  }

  handleClick = () => {

  // Retrieve the input fields

this.props.history.push("/Login")

  }
  render() {
    return (
      <div  align="center">
      <Form  className="login-form"  style={{ width: '300px'}}>
      <FormItem>

      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  value={this.state.firstname} onChange={this.handleChange}  placeholder="First Name" />

      </FormItem>
      <FormItem>

      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.Secondname} onChange={this.handleChang} placeholder="Second Name" />

      </FormItem>
      <FormItem>

      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}value={this.state.Email} onChange={this.handleChan}  placeholder="Email" />

      </FormItem>
      <FormItem>

      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}value={this.state.password} onChange={this.handleCha} type="password" placeholder="Password" />

      </FormItem>
      <FormItem>

      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}value={this.state.passwor} onChange={this.handleCh} type="password" placeholder="Comfirm Password" />

      </FormItem>
      <FormItem>
      <Button onClick={this.handleClick} type="primary" htmlType="submit" className="login-form-button">
        Register
      </Button>

      </FormItem>

      </Form>

      </div>


    );
  }
}

const style = {
  margin: 15,
};

export default Register;
