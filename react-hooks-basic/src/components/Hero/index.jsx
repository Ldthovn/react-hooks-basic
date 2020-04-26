import React from "react";
import PropTypes from "prop-types";

function Hero(props) {
  const { name } = props;
  console.log("Hero render", name);

  return <div>Hero name : {name}</div>;
}

Hero.propTypes = {
  name: PropTypes.string,
};

Hero.defaultProps = {
  name: "",
};

export default React.memo(Hero);
