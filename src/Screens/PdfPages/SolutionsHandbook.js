import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./PdfPages.scss";
// import SolutionsHandbookPdf from "../../assets/pdf/Solutions-Handbook.pdf";
import { Helmet } from "react-helmet";

export class SolutionsHandbook extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GSI Solutions handbook | One hand guides for Tailored needs</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="GSI Solutions’ handbook is a one-stop guide for tailor your needs helps to navigate, comprehensive and contains summaries of all the information in each topic area."/> 
          <meta name="keywords" content="Solution handbook,GSI,Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"/> 
          <meta name="og:title" content="GSI Solutions handbook | One hand guides for Tailored needs"/>      
          <meta name="og:description" content="GSI Solutions’ handbook is a one-stop guide for tailor your needs helps to navigate, comprehensive and contains summaries of all the information in each topic area."/> 
              </Helmet>

        {/* <div className="pdf-preview">
          <object data={SolutionsHandbookPdf} type="application/pdf">
            <iframe
              src={SolutionsHandbookPdf}
              width="100%"
              height="100%"
              title="GSI Introduction"
            ></iframe>
          </object>
          <p>
            If the browser doesn't load the pdf or download automatically,
            please download the pdf from the{" "}
            <a href={SolutionsHandbookPdf} download>
              mirror link
            </a>
          </p>
        </div> */}
      </React.Fragment>
    );
  }
}

export default withRouter(SolutionsHandbook);
