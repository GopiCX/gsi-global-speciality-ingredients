import React, { Component } from "react";
import { withRouter } from "react-router";
import "./PdfPages.scss";
import GsiIntroPdf from "../../assets/pdf/GSI-Introduction.pdf";
import { Helmet } from "react-helmet";

export class GsiIntroduction extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Experience The Difference! GSI is a leading global ingredients solutions company </title> 
          <meta name="title" content=""/> 
          <meta name="description" content="Global Specialty Ingredients (GSI) is a leading global formulations company with an extensive range of natural food ingredients, specialty ingredients and functional food ingredients."/> 
          <meta name="keywords" content="GSI Introduction,GSI,Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"/> 
          <meta name="og:title" content="Experience The Difference! GSI is a leading global ingredients solutions company "/>      
          <meta name="og:description" content="Global Specialty Ingredients (GSI) is a leading global formulations company with an extensive range of natural food ingredients, specialty ingredients and functional food ingredients."/> 
              </Helmet>

        <div className="pdf-preview">
          <object data={GsiIntroPdf} type="application/pdf">
            <iframe
              src={GsiIntroPdf}
              width="100%"
              height="100%"
              title="GSI Introduction"
            ></iframe>
          </object>
          <p className="pdf-download">
            If the browser doesn't load the pdf or download automatically,
            please download the pdf from the{" "}
            <a href={GsiIntroPdf} download>
              mirror link
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(GsiIntroduction);
