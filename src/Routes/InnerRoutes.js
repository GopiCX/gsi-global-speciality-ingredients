import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Screens/LandingPage/Home";
import AboutUs from "../Screens/AboutUs/AboutUs";
import ContactUs from "../Screens/ContactUs/ContactUs";
import Events from "../Screens/Events/Events";
import Career from "../Screens/Career/Career";
import OurSolutions from "../Screens/OurSolutions/OurSolutions";
import Responsibility from "../Screens/Responsibility/Responsibility";
import KeyAccountmanager from "../Screens/KeyAccountmanager/KeyAccountmanager";
import ConfectionerySolutions from "../Screens/ConfectionerySolutions/ConfectionerySolutions";
import BakerySolutions from "../Screens/BakerySolutions/BakerySolutions";
import ShelfLifeSolutions from "../Screens/ShelfLifeSolutions/ShelfLifeSolutions";
import OilFatSolutions from "../Screens/OilFatSolutions/OilFatSolutions";
import AntiCloudingAgents from "../Screens/AntiCloudingAgents/AntiCloudingAgents";
import BeverageSolutions from "../Screens/BeverageSolutions/BeverageSolutions";
import ChocolateSolutions from "../Screens/ChocolateSolutions/ChocolateSolutions";
import DairyDairyAnalogue from "../Screens/DairyDairyAnalogue/DairyDairyAnalogue";
import FlavourSolutions from "../Screens/FlavourSolutions/FlavourSolutions";
import NutritionSolutions from "../Screens/NutritionSolutions/NutritionSolutions";
import SavourySolutions from "../Screens/SavourySolutions/SavourySolutions";
import Adsorbent from "../Screens/Adsorbent/Adsorbent";
import CrystalPromoter from "../Screens/CrystalPromoter/CrystalPromoter";
import FryingSolution from "../Screens/FryingSolution/FryingSolution";
import ColourSolutions from "../Screens/ColourSolutions/ColourSolutions";
import TermsandConditions from "../Screens/TermsandConditions/TermsandConditions";
import GsiIntroduction from "../Screens/PdfPages/GsiIntroduction";
import SolutionsHandbook from "../Screens/PdfPages/SolutionsHandbook";

import Layout from "../Layout/Layout";
import Glorich5050 from "../Screens/Blogs/Glorich5050";
import Blogs from "../Screens/Blogs/Blogs";
import Glorich7155 from "../Screens/Blogs/Glorich7155";
import Globalance93 from "../Screens/Blogs/Globalance93";
import Glorise5410 from "../Screens/Blogs/Glorise5410";
import Glorich6363 from "../Screens/Blogs/Glorich6363";
import Glocoat95L from "../Screens/Blogs/Glocoat95l";
import GlofrySeries from "../Screens/Blogs/GlofrySeries";
import GlomulSeries from "../Screens/Blogs/GlomulSeries";
import AntiCloudingAgent from "../Screens/Blogs/AntiCloudingAgent";
import GlazingAgent from "../Screens/Blogs/GlazingAgent";
import GlorinaPopcornOil from "../Screens/Blogs/GlorinaPopcornOil";
class InnerRoutes extends React.Component {
  componentDidMount() {
    this.handleTrailingSlash();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.handleTrailingSlash();
    }
  }

  handleTrailingSlash() {
    const { pathname } = this.props.location;

    // Check if there is a trailing slash
    if (pathname !== "/" && pathname.slice(-1) === "/") {
      // Remove the trailing slash
      const newPath = pathname.slice(0, -1);

      // Redirect to the new path
      this.props.history.replace(newPath);
    }
  }
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
          {/* <Route path="/key-account-manager" component={KeyAccountmanager} /> */}
          <Route
            path="/confectionery-solutions"
            component={ConfectionerySolutions}
          />
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
          {/* <Route path="/gsi-introduction" component={GsiIntroduction} />
          <Route path="/solutions-handbook" component={SolutionsHandbook} /> */}
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/glorich-5050" component={Glorich5050} />
          <Route path="/glorich-7155" component={Glorich7155} />
          <Route path="/glorich-7155" component={Glorich7155} />
          <Route path="/globalance-93" component={Globalance93} />
          <Route path="/glorise-5410" component={Glorise5410} />
          <Route path="/glorich-6363" component={Glorich6363} />
          <Route path="/glocoat-95l" component={Glocoat95L} />
          <Route path="/glofry-series" component={GlofrySeries} />
          <Route path="/glomul-series" component={GlomulSeries} />
          <Route path="/anti-clouding-agent" component={AntiCloudingAgent} />
          <Route path="/glazing-agent" component={GlazingAgent} />
          <Route path="/glorina-popcorn-oil" component={GlorinaPopcornOil} />
          <Route
            path="/:url*"
            exact
            strict
            render={({ location }) => (
              <Redirect to={location.pathname.replace(/\/+$/, "")} />
            )}
          />
        </Switch>
      </Layout>
    );
  }
}

export default InnerRoutes;
