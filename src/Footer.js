import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Made with ❤️️ by Karan Rajput...</p>
        <p>
          ...Powered by{" "}
          <a target="_blank" href="https://www.npmjs.com/package/bitly-react">
            Bitly-react
          </a>
          {"  &  "}
          <a target="_blank" href="http://goqr.me/">
            QR Code Generator
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
