import React from "react";
import {Link} from "react-router-dom"

const index = (props) => {
  return (
    <div className="call-to-action">
      <button>
        <Link to={`/${props.link}`}>{props.buttonTxt}</Link>
      </button>
    </div>
  );
};

export default index;
