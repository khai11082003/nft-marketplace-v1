import { ExclamationOutlined } from "@ant-design/icons";
// import { Button } from "antd";
import React from "react";

export const NotFound = () => {
  // const history = useHistory();
  // const goBack = () => {
  //   history.goBack();
  // };
  return (
    <div className="main-body-section">
      <div className="container">
        <div className="block-title" style={{ color: "#fa8c16" }}>
          <h2 style={{ color: "#fa8c16" }}>
            {/* <ExclamationOutlined /> */}
            Page Not Found
          </h2>
          <p className="large">Sorry, this page does not exist</p>
          <button>Go Back</button>
        </div>
      </div>
    </div>
  );
};
