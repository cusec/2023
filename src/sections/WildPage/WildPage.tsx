import React from "react";
import { Link } from "react-router-dom";
import { Paragraph, Subtitle } from "../../components";

import "./WildPage.scss";

function WildPage() {
  return (
    <div className="WildPage">
      <div className="Title">
        <Subtitle>404 Error Page Not Found</Subtitle>
        <Paragraph>
          Oh dear, someone must be punished for this horrendous mistake. Don't
          worry, we're firing our web development team as we speak 😡
        </Paragraph>
        <p className="Paragraph">
          In the meantime, feel free to return to our{" "}
          <Link to="/" className="Link">
            home page.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default WildPage;
