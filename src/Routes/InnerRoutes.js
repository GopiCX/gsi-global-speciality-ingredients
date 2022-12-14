import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../Screens/LandingPage/Home';
import AboutUs from '../Screens/AboutUs/AboutUs';
import ContactUs from '../Screens/ContactUs/ContactUs';
import Events from '../Screens/Events/Events';
import Career from '../Screens/Career/Career';
import OurSolutions from '../Screens/OurSolutions/OurSolutions';
import Responsibility from '../Screens/Responsibility/Responsibility';
import KeyAccountmanager from '../Screens/KeyAccountmanager/KeyAccountmanager';
import ConfectionerySolutions from '../Screens/ConfectionerySolutions/ConfectionerySolutions';
import BakerySolutions from '../Screens/BakerySolutions/BakerySolutions';
import ShelfLifeSolutions from '../Screens/ShelfLifeSolutions/ShelfLifeSolutions';
import OilFatSolutions from '../Screens/OilFatSolutions/OilFatSolutions';
import AntiCloudingAgents from '../Screens/AntiCloudingAgents/AntiCloudingAgents';
import BeverageSolutions from '../Screens/BeverageSolutions/BeverageSolutions';
import ChocolateSolutions from '../Screens/ChocolateSolutions/ChocolateSolutions';
import DairyDairyAnalogue from '../Screens/DairyDairyAnalogue/DairyDairyAnalogue';
import FlavourSolutions from '../Screens/FlavourSolutions/FlavourSolutions';
import NutritionSolutions from '../Screens/NutritionSolutions/NutritionSolutions';
import SavourySolutions from '../Screens/SavourySolutions/SavourySolutions';
import Adsorbent from '../Screens/Adsorbent/Adsorbent';
import CrystalPromoter from '../Screens/CrystalPromoter/CrystalPromoter';
import FryingSolution from '../Screens/FryingSolution/FryingSolution';
import ColourSolutions from '../Screens/ColourSolutions/ColourSolutions';
import TermsandConditions from '../Screens/TermsandConditions/TermsandConditions';

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
                    <Route path="/events" component={Events} />
                    <Route path="/career" component={Career} />
                    <Route path="/our-solutions" component={OurSolutions} />
                    <Route path="/responsibility" component={Responsibility} />
                    <Route path="/key-account-manager" component={KeyAccountmanager} />
                    <Route path="/confectionery-solutions" component={ConfectionerySolutions} />
                    <Route path="/bakery-solutions" component={BakerySolutions} />
                    <Route path="/shelf-life-solutions" component={ShelfLifeSolutions} />
                    <Route path="/oil-fat-solutions" component={OilFatSolutions} />
                    <Route path="/anti-clouding-agents" component={AntiCloudingAgents} />
                    <Route path="/beverage-solutions" component={BeverageSolutions} />
                    <Route path="/chocolate-solutions" component={ChocolateSolutions} />
                    <Route path="/dairy-dairy-analogue" component={DairyDairyAnalogue} />
                    <Route path="/flavour-solutions" component={FlavourSolutions} />
                    <Route path="/nutrition-solutions" component={NutritionSolutions} />
                    <Route path="/savoury-solutions" component={SavourySolutions} />
                    <Route path="/adsorbent" component={Adsorbent} />
                    <Route path="/crystal-promoter" component={CrystalPromoter} />
                    <Route path="/frying-solution" component={FryingSolution} />
                    <Route path="/colour-solutions" component={ColourSolutions} />
                    <Route path="/terms-and-conditions" component={TermsandConditions} />
                </Switch>
            </Layout>
        );
    }
}

export default InnerRoutes;
