import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./PdfPages.scss";
import SolutionsHandbookPdf from "../../assets/pdf/Solutions-Handbook.pdf";

export class SolutionsHandbook extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pdf-preview">
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
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SolutionsHandbook);
