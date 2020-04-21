import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handlevalueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent reloading brower
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);

    // Reset form
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handlevalueChange} />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

export default TodoForm;
