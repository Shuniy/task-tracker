import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <footer>
        <p>No Copyright &copy; {year}</p>
        <a href="/about">About</a>
      </footer>
    </div>
  );
};

export default Footer;
