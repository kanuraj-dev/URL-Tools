import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

function SnackbarAlert({ snackbarOpen, setSnackbarOpen }) {
  // ===========================================
  //   handle close function for SnackBar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  // ===========================================

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          Invalid URL. correct format : "http://www.example.com"
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackbarAlert;
