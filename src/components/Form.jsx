import React, { useContext, useState } from "react";
import PeopleContext from "../context/people/PeopleContext";

const Form = () => {
  const { setName } = useContext(PeopleContext);

  return (
    <section className="form-container">
      <form className="form-finder">
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="label-text">
            Type a name
          </label>
        </div>
      </form>
    </section>
  );
};

export default Form;
