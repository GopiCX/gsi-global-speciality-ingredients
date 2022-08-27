import React from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';

class AsyncRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    return (
      <div>
        {this.props.nolayout ?
          <this.props.screen />
          :
          <this.props.screen />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    translations: state.users.translations,
    userInfo: state.users.userInfo,
    countries: state.users.countries,
    currentLanguage: state.users.currentLanguage
  };
}
export default connect(mapStateToProps)(AsyncRoute);
