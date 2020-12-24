import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Output from "./Output";
import SnackbarAlert from "./SnackbarAlert";

function App() {
  // ===========================================
  // States
  const [url, setUrl] = useState("");
  const [action, setAction] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isUrlValid, setIsUrlValid] = useState(false);
  // ===========================================

  // ===========================================
  //  Function to check if url is valid or not
  function isUrl(str) {
    // url regex format
    let regexp = /^(?:(?:https?|ftp):\/\/)(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    // =======================
    // if url is valid
    if (regexp.test(str)) {
      setSnackbarOpen(false);
      setIsUrlValid(true);
    }
    // if url is invalid
    else {
      setIsUrlValid(false);
      setSnackbarOpen(true);
    }
    // =======================
  }
  // ===========================================

  // ===========================================
  // useEffect() to check the url format whenever the url is changed
  useEffect(() => {
    url && isUrl(url);
  }, [url]);
  // ===========================================

  return (
    <div className="app">
      {/* Banner */}
      <Banner setUrl={setUrl} setAction={setAction} />

      {/* OutPut */}
      {/* show output only if url is valid */}
      {isUrlValid && <Output url={url} action={action} />}

      {/* Footer */}
      <Footer />

      {/* SnackBar/Alert */}
      <SnackbarAlert
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
      />
    </div>
  );
}

export default App;
