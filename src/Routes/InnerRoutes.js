import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../Screens/LandingPage/Home';
import AboutUs from '../Screens/AboutUs/AboutUs';
import ContactUs from '../Screens/ContactUs/ContactUs';
import Career from '../Screens/Career/Career';
import Layout from '../Layout/Layout';
class InnerRoutes extends React.Component {
    render() {
        const {
            match: { url },
        } = this.props;
        return (
            <Layout {...this.props}>
                <Switch>
                    <Route exact path={`/`} component={Home} />                    
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/career" component={Career} />
                </Switch>
            </Layout>
        );
    }
}

export default InnerRoutes;
