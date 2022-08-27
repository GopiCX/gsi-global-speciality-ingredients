import React from 'react';
import { Layout } from 'antd';
import HeaderNav from './Header';
import FooterNav from './Footer';

const { Content } = Layout;

export default class Layouts extends React.Component {
  state = {
    collapsed: false,
  };
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <HeaderNav {...this.props} />
          <Content>
            {this.props.children}
          </Content>
          <FooterNav />
        </Layout>
      </Layout>
    );
  }
}