import React, { useEffect } from "react";
import Button from "../../Button";
import { useState } from "react";
import styles from "./QRCODE.module.css";
import info from "../../../Img/info.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QRCODE = () => {
  const [inputValue, setInputValue] = useState();
  const [renderQRCode, setRenderQRCode] = useState(false);
  const [googleCharAPI, setGoogleCharAPI] = useState();

  useEffect(() => {
    setGoogleCharAPI(false);
    setInputValue();
    setRenderQRCode();
  }, []);

  const messageError = (string) => {
    toast.error(string, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.leftSide}>
        <div className={styles.title}>
          <h1>Manage your QR Code</h1>
        </div>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a link here"
        />
        <Button
          ACTION={() => gerarQR()}
          TITLE="Generate Qr code"
          CLASS={styles.button}
        />
      </div>
      <div className={styles.rightSide}>
        {renderQRCode ? (
          <div className={styles.containerImage}>
            <img
              alt="QR code will appear here"
              id="imageQR"
              draggable="false"
              src={googleCharAPI}
            />
          </div>
        ) : (
          <div className={styles.QrcodeHere}>
            <img src={info} alt="info" draggable="false" />
            <p>QR code will appear here!</p>
          </div>
        )}
      </div>
    </div>
  );

  function gerarQR() {
    if (!inputValue) {
      messageError("Insert a link in the input to generate the QR Code");
      setRenderQRCode(false);
      document.querySelector("input").focus();
      return;
    } else {
      setRenderQRCode(true);
      setGoogleCharAPI(
        `https://chart.googleapis.com/chart?cht=qr&chs=450x450&chld=H&chl=${encodeURIComponent(
          inputValue
        )}`
      );
      document.querySelector("input").value = "";
    }
  }
};

export default QRCODE;
