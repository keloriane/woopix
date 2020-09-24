import React from "react";

const index = () => {
  return (
    <div className="call-to-action">
      <button>
        <Link to={`/${props.link}`}>{props.buttonTxt}</Link>
      </button>
    </div>
  );
};

export default index;
