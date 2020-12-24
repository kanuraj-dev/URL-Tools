import { Button } from "@material-ui/core";
import { SaveAlt } from "@material-ui/icons";
import FileSaver from "file-saver";
import React from "react";
import "./QrCode.css";

function QrCode({ url, setIsOutputLoaded }) {
  // ===========================================
  // Make url to get image of qr code with Given Url
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${url}`;
  // ===========================================

  // ===========================================
  // Download function to download the Qr Code
  function download(imgLink, fileName) {
    FileSaver.saveAs(imgLink, fileName);
  }
  // ===========================================

  // ===========================================
  // Function to scroll to the div with id passed in parameter
  function scrollToFunc(hash) {
    // Set OutPutLoaded "true" to display "ShortUrl" Component
    setIsOutputLoaded(true);
    window.location.hash = "";
    window.location.hash = "#" + hash;
  }
  // ===========================================

  return (
    <div className="qrCode" id="QrCode">
      <h2>Here Is Your Qr Code... ;)</h2>

      {/* Qr Code Image */}
      <img
        src={qrCodeUrl}
        alt="QR_Code"
        onLoad={() => scrollToFunc("QrCode")}
      />

      {/* Download button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => download(qrCodeUrl, "Qr_code")}
      >
        Download
        <SaveAlt style={{ paddingLeft: "7px" }} />
      </Button>
    </div>
  );
}

export default QrCode;
