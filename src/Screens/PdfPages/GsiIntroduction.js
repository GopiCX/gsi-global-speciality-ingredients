import React, { Component } from "react";
import { withRouter } from "react-router";
import "./PdfPages.scss";
import GsiIntroPdf from "../../assets/pdf/GSI-Introduction.pdf";

export class GsiIntroduction extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pdf-preview">
          <object data={GsiIntroPdf} type="application/pdf">
            <iframe
              src={GsiIntroPdf}
              width="100%"
              height="100%"
              title="GSI Introduction"
            ></iframe>
              <p className="pdf-download">If the browser doesn't load the pdf or download automatically, please download the pdf from the <a href={GsiIntroPdf} download>mirror link</a></p>
          </object>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(GsiIntroduction);
