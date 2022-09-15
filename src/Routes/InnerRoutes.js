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
import OurSolutions from '../Screens/OurSolutions/OurSolutions';
import Responsibility from '../Screens/Responsibility/Responsibility';
import KeyAccountmanager from '../Screens/KeyAccountmanager/KeyAccountmanager';
import ConfectionerySolutions from '../Screens/ConfectionerySolutions/ConfectionerySolutions';
import BakerySolutions from '../Screens/BakerySolutions/BakerySolutions';
import ShelfLifeFryingSolutions from '../Screens/ShelfLifeFryingSolutions/ShelfLifeFryingSolutions';
import OilFatSolutions from '../Screens/OilFatSolutions/OilFatSolutions';

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
                    <Route path="/our-solutions" component={OurSolutions} />
                    <Route path="/responsibility" component={Responsibility} />
                    <Route path="/key-account-manager" component={KeyAccountmanager} />
                    <Route path="/confectionery-solutions" component={ConfectionerySolutions} />
                    <Route path="/bakery-solutions" component={BakerySolutions} />
                    <Route path="/shelf-life-frying-solutions" component={ShelfLifeFryingSolutions} />
                    <Route path="/oil-fat-solutions" component={OilFatSolutions} />
                </Switch>
            </Layout>
        );
    }
}

export default InnerRoutes;
