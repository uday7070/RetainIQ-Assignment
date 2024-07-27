import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
        <div className="header_icon">
          <ArrowBackIcon />
        </div>

        <div className="header_rule">
          Rules Creation
          <div className="header_line">
            <hr />
          </div>
        </div>
      </div>
      <div>
        <button className="header_btn">Publish Feed</button>
      </div>
    </div>
  );
};

export default Header;
