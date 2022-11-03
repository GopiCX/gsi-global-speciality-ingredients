import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import Routes from './Routes/Routes';
import 'antd/dist/antd.min.css';
import './Style/styles.scss';
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}