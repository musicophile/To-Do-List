import React, { Component } from 'react';
import { Calendar } from 'antd';
import Button from 'antd/lib/button'
import { Avatar } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Divider }  from 'antd';
import { List } from 'antd';
import 'antd/dist/antd.css';
import { Popover } from 'antd';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Input } from 'antd';



class main extends Component {
  state = {
    date: new Date(),
    collapsed: false,
    data: [],

  }

hide = () => {

this.props.history.push("/ViewMore")

}
hid = () => {

this.props.history.push("/textbox")

}
logout = () => {

this.props.history.push("/Login")

}
onCollapse = (collapsed) => {
  console.log(collapsed);
  this.setState({ collapsed });
}
onPanelChange(value, mode) {
console.log(value, mode);
}
  render() {
    return (
      <div>
          <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
                <Avatar size="large"  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span>Filbert Nyakunga</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Home</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Monthly Task</span></span>}
            >
              <Menu.Item key="3">Week 1</Menu.Item>
              <Menu.Item key="4">Week 2</Menu.Item>
              <Menu.Item key="5">Week 3</Menu.Item>
              <Menu.Item key="6">Week 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="7">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
            <Menu.Item style={{paddingTop:'150'}} onClick={this.logout} key="10">
            <Icon type="logout" />
            <span>Log Out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
      <div  align="center">
          <Header style={{ background: '#fff', padding: 0, textAlign: 'center'}} >
          <div style={{margin: '0 16px', textAlign: 'left' }} >
           August 9 <Divider  type="vertical" />15 Activities this week.
           </div>
           </Header>
          <Content style={{ margin: '0 16px' }}>

                  <div  style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar  fullscreen={false}  onPanelChange={this.onPanelChange}  />
            </div>
      <div>
      <div style={{ textAlign: 'left' }}>
          <b>Tasks</b>
          <br/>
          Lorem ipsum dolor sit amet, constectetur adipiscing elit.<br/> Sed nonne mernbare, quae sunt a te dicta? Refert tamen, quo modo.</div>
          </div>
<Popover placement="right" content={(
                        <div>
                            <ul type="none" >
                                 <li> <Icon type="edit" /> <a onClick={this.hid}>Add Tasks</a></li>
            <li > <Icon type="info-circle-o" /> <a onClick={this.hide} >View Tasks</a></li>
            </ul>

            </div>
          )} trigger="click">
       <Button>Right</Button>
     </Popover>
          </Content>
          <Divider  />
          </div>
          </Layout>
        <Sider theme='light'
         collapsible
        >
        <Search style={{margin: '16px 0', textAlign: 'left' }}
     placeholder="input search text"
     onSearch={value => console.log(value)}
     enterButton
   />
    <div>
    Daily Tasks
   <List
      dataSource={data}
      renderItem={item => (
            <List.Item >
              <List.Item.Meta
              time="12:00pm"

                description={item.description}
              />
              </List.Item>
          )}
        >
          </List>
            </div>



        </Sider>
      </Layout>
          </div>
    );
  }
}
export default main;

const data = [

  {
    description: 'Racing car sprays burning fuel into crowd.',
  },
  {
    description: 'Japanese princess to wed commoner.',
  },
  {
    description: 'Australian walks 100km after outback crash.',
  },
  {
    description: 'Man charged over missing wedding girl.',
  },

  {
    description: 'Ant Design Title 1',
  },
  {
    description: 'Ant Design Title 2',
  },
  {
    description: 'Ant Design Title 3',
  },
  {
    description: 'Ant Design Title 4',
  },
];

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
