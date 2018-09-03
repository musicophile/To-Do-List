import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import reqwest from 'reqwest';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { List, Avatar, Button, Spin } from 'antd';
class ViewMore extends Component {
  constructor(props){
    super(props);
    this.state={
      loading: true,
         loadingMore: false,
         showLoadingMore: true,
         data: [],
    }
  }

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res.results,
      });
    });
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  onLoadMore = () => {
  this.setState({
    loadingMore: true,
  });
  this.getData((res) => {
    const data = this.state.data.concat(res.results);
    this.setState({
      data,
      loadingMore: false,
    }, () => {
      // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
      // In real scene, you can using public method of react-virtualized:
      // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
      window.dispatchEvent(new Event('resize'));
    });
  });
}
Cancel = () => {

this.props.history.push("/main")

}
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
   const loadMore = showLoadingMore ? (
     <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
       {loadingMore && <Spin />}
       {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
     </div>
   ) : null;
    return (
      <div>
<List
className="demo-loadmore-list"
       loading={loading}
       itemLayout="horizontal"
       loadMore={loadMore}
       dataSource={data}
   renderItem={item => (
<List.Item actions={[<a>edit</a>, <a>more</a>]}>
<List.Item.Meta
             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
             title={<a href="https://ant.design">{item.name.last}</a>}
             description="Ant Design, a design language for background applications, is refined by Ant UED Team"
           />
           </List.Item>
)}
/>
<Button label="Cancel" type="primary" onClick = {this.Cancel} >Cancel</Button></div>
    );
  }
}

const style = {
  margin: 15,
};
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default ViewMore;
