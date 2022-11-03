import React, { Component } from "react";
import "./PdfPages.scss";
import GsiIntroPdf from "../../assets/pdf/GSI-Introduction.pdf";

export class GsiIntroduction extends Component {
  render() {
    return (
      <React.Fragment>
        <object data={GsiIntroPdf} type="application/pdf">
          <iframe
            src={GsiIntroPdf}
            width="100%"
            height="100%"
            title="GSI Introduction"
          ></iframe>
          <p>This browser does not support pdf</p>
        </object>
      </React.Fragment>
    );
  }
}

export default GsiIntroduction;
