import React, { useState } from "react";
import LinkIcon from "@material-ui/icons/Link";
import "./Banner.css";
import { Button } from "@material-ui/core";

function Banner({ setUrl, setAction }) {
  // ===========================================
  //  State to store input value of Url
  const [urlInput, setUrlInput] = useState("");
  // ===========================================

  // ===========================================
  // function to start the task of generating QR Code
  const generateQrCode = () => {
    // if url input value is not empty
    if (urlInput) {
      setUrl(urlInput);
      setAction("getQrCode");
    }
  };
  // ===========================================

  // ===========================================
  // function to start the task of Shortening the link
  const shortenLink = () => {
    // if url input value is not empty
    if (urlInput) {
      setUrl(urlInput);
      setAction("getShortenLink");
    }
  };
  // ===========================================

  return (
    <div className="banner">
      {/* Logo/Branding */}
      <div className="banner__branding">
        <LinkIcon className="banner__brandingIcon" />
        <h1>URL Tools</h1>
      </div>

      {/* WebApp Description */}
      <p className="banner__description">
        Generate & Download QR Code or Shorten Any URL Online With The Help Of
        URL Tools
      </p>

      {/* Form input to get url*/}
      <div className="banner__form">
        <div className="banner__urlInput">
          <LinkIcon />
          <input
            type="url"
            placeholder="Enter Url or Link..."
            onChange={(e) => setUrlInput(e.target.value)}
            value={urlInput}
            required
            spellCheck="false"
            max="150"
          />
        </div>

        {/* Buttons to let user choose what he wants to do with the url */}
        <div className="banner_formBtns">
          {/* Button for QR Code */}
          <Button
            className="btn1"
            variant="contained"
            color="primary"
            onClick={generateQrCode}
          >
            Generate QR Code
          </Button>

          {/* Button for Short Link */}
          <Button
            className="btn2"
            variant="contained"
            color="secondary"
            onClick={shortenLink}
          >
            Shorten The Url
          </Button>
        </div>
        {/* ----------- */}
      </div>
    </div>
  );
}

export default Banner;
