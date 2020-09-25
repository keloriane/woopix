import React from "react";
import {Link} from "react-router-dom"

const CallToAction = (props) => {
  return (
    <div className="call-to-action">
      <button>
        <Link to={`/${props.link}`}>{props.buttonTxt}</Link>
      </button>
    </div>
  );
};

export default CallToAction;
