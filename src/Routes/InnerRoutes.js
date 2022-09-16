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
import AntiCloudingCloudingAgents from '../Screens/AntiCloudingCloudingAgents/AntiCloudingCloudingAgents';
import BeverageSolutions from '../Screens/BeverageSolutions/BeverageSolutions';
import ChocolateSolutions from '../Screens/ChocolateSolutions/ChocolateSolutions';
import DairyDairyAnalogue from '../Screens/DairyDairyAnalogue/DairyDairyAnalogue';
import FlavourColourSolutions from '../Screens/FlavourColourSolutions/FlavourColourSolutions';
import NutritionSolutions from '../Screens/NutritionSolutions/NutritionSolutions';
import SavourySolutions from '../Screens/SavourySolutions/SavourySolutions';

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
                    <Route path="/anti-clouding-clouding-agents" component={AntiCloudingCloudingAgents} />
                    <Route path="/beverage-solutions" component={BeverageSolutions} />
                    <Route path="/chocolate-solutions" component={ChocolateSolutions} />
                    <Route path="/dairy-dairy-analogue" component={DairyDairyAnalogue} />
                    <Route path="/flavour-colour-solutions" component={FlavourColourSolutions} />
                    <Route path="/nutrition-solutions" component={NutritionSolutions} />
                    <Route path="/savoury-solutions" component={SavourySolutions} />
                </Switch>
            </Layout>
        );
    }
}

export default InnerRoutes;
