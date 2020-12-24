import React, { useState } from "react";
import QrCode from "./QrCode";
import ShortUrl from "./ShortUrl";

function Output({ url, action }) {
  // ===========================================
  // State to store the boolean value of is a component is loaded completely
  const [isOutputLoaded, setIsOutputLoaded] = useState(false);
  // ===========================================

  // ===========================================
  // if component is loaded then set hideStyle an empty object to show component
  // If component is not loaded then set hideStyle display none to hide component
  const hideStyle = isOutputLoaded ? {} : { display: "none" };
  // ===========================================

  // ===========================================
  // run this only if url and action both aren't empty
  if (url || action) {
    // ===========================================
    // if action is "getQrCode" then load "QrCode" component
    if (action === "getQrCode") {
      return (
        // is isOutputLoaded is false it will hide the component
        <div style={hideStyle}>
          <QrCode url={url} setIsOutputLoaded={setIsOutputLoaded} />
        </div>
      );
    }
    // ===========================================
    // else if action is "getShortenLink" then load "ShortUrl" component
    else if (action === "getShortenLink") {
      return (
        // is isOutputLoaded is false it will hide the component
        <div style={hideStyle}>
          <ShortUrl url={url} setIsOutputLoaded={setIsOutputLoaded} />
        </div>
      );
    }
  }
  // ===========================================
}

export default Output;
