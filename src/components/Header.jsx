import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="title-container">
        <h1 className="app-title">
          People Search <img src="../search-icon.svg" className="icon-app" />
        </h1>
      </div>
      <p className="description-app">
        This app is fetching data from{" "}
        <a href="https://jsonplaceholder.typicode.com/" target="_blank">
          JSONPlaceholder
        </a>
      </p>
    </header>
  );
};

export default Header;
