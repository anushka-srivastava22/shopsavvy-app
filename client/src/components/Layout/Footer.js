import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/mhVKIKpJ-YKquRyXkTVyX"
        width="100%"
        style="height: 100%; min-height: 700px"
        frameborder="0"
      ></iframe>

      <h1 className="text-center">All Right Reserved &copy; Shopsavvy</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Footer;