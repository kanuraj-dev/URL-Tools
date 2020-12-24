import React, { useEffect, useState } from "react";
import { BitlyClient } from "bitly-react";
import { FileCopy } from "@material-ui/icons";
import { IconButton, Tooltip } from "@material-ui/core";
import copy from "copy-text-to-clipboard";
import "./ShortUrl.css";

function ShortUrl({ url, setIsOutputLoaded }) {
  // ===========================================
  // States
  const [shortenURL, setShortenURL] = useState("");
  const [tooltipTitle, setTooltipTitle] = useState("Copy To ClipBoard");
  // ===========================================

  // ===========================================
  // Create a new instance of BitleyClient
  const bitly = new BitlyClient("774e7e05ced0a77a7c1e586c3c02a8219ab07cb5", {});
  // ===========================================

  // ===========================================
  // everytime url changes... run this function to get the shorten url of it
  useEffect(() => {
    const getShortUrl = async () => {
      let result;
      try {
        result = await bitly.shorten(url);
      } catch (e) {
        console.log(e);
      }
      // If short url is returned successfully the setShortenUrl and scroll to "shortUrl" div
      if (result?.url) {
        setShortenURL(result?.url);
        scrollToFunc("shortUrl");
      }
    };
    getShortUrl();
  }, [url]);
  // ===========================================

  // ===========================================
  // Function to scroll to the div with id passed in parameter
  function scrollToFunc(hash) {
    // Set OutPutLoaded "true" to display QrCode Component
    setIsOutputLoaded(true);
    window.location.hash = "";
    window.location.hash = "#" + hash;
  }
  // ===========================================

  // ===========================================
  // Function to copy the shorten url to keyboard
  const copyToClipboard = () => {
    copy(shortenURL);
    setTooltipTitle("Copied.!");
  };
  // ===========================================

  return (
    <div className="shortUrl" id="shortUrl">
      <h2>Here Is Your Shortened URL... ;)</h2>
      <div className="shortUrl__linkContainer">
        {/* Input to show the short link */}
        <input
          className="shortUrl__input"
          type="text"
          disabled
          value={shortenURL}
        />

        {/* Copy To Clipboard button */}
        <Tooltip title={tooltipTitle} aria-label="Copy">
          <IconButton onClick={copyToClipboard}>
            <FileCopy color="secondary" />
          </IconButton>
        </Tooltip>
      </div>
      <p>Copy it to the Clipboard and share.!</p>
    </div>
  );
}

export default ShortUrl;
