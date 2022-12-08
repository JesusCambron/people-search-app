import React from "react";

const PeopleItem = ({ item }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="https://placeimg.com/640/480/people" alt="person-img" />
      </div>
      <div className="info-item-container">
        <div className="info-container">
          <p>
            <b>Name:</b> <span>{item.name}</span>
          </p>
        </div>
        <div className="info-container">
          <p>
            <b>Email:</b> <span>{item.email}</span>
          </p>
        </div>
        <div className="info-container">
          <p>
            <b>Address:</b>{" "}
            <span>{`${item.address.street}, ${item.address.city}`}</span>
          </p>
        </div>
        <div className="info-container">
          <p>
            <b>Phone:</b> <a href={`tel:+${item.phone}`}>{item.phone}</a>
          </p>
        </div>
        <div className="info-container">
          <p>
            <b>WebSite:</b>{" "}
            <a href={`http://${item.website}`}>{item.website}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;
