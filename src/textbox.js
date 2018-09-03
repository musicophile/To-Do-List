import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Input } from 'antd';
import { Button } from 'antd';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

class textbox extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  Cancel = () => {

  this.props.history.push("/main")

  }
  render() {
    return (
      <div>
      <div style={{ textAlign: 'center', margin: 12}} >
    <TextArea rows={4} />
    </div>
    <div style={{ textAlign: 'center', marginTop: 12}} >
    <Button label="Cancel" type="primary" onClick = {this.Cancel}>Cancel</Button>
    </div>
    <div style={{ textAlign: 'center', marginTop: 12}} >
    <Button label="Submit" type="primary" onClick={(event) => this.handleClick(event)} >Submit</Button>
    </div>
    </div>
    );
  }
}

const style = {
  margin: 15,
};

const { TextArea } = Input;

export default textbox;
