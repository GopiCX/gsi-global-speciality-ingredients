import React, { Component } from "react";
import "./PdfPages.scss";
import SolutionsHandbookPdf from "../../assets/pdf/Solutions-Handbook.pdf";

export class SolutionsHandbook extends Component {
  render() {
    return (
      <React.Fragment>
        <object data={SolutionsHandbookPdf} type="application/pdf">
          <iframe
            src={SolutionsHandbookPdf}
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

export default SolutionsHandbook;
