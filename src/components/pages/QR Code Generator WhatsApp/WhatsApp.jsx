import React from "react";
import styles from "./WhatsApp.module.css";
import info from "../../../Img/info.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Button from "../../Button";

const WhatsAppGenerator = () => {
  const [inputValue, setInputValue] = useState();
  const [renderQRCode, setRenderQRCode] = useState(false);
  const [googleCharAPI, setGoogleCharAPI] = useState();
  const [message, setMessage] = useState();

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
          <h1 className={styles.h1}>Manage your QR Code</h1>
        </div>
        <input
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your telephone number"
        />
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a short message"
          id="message"
          maxLength="40"
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
      messageError("Enter your telephone number in the input bellow");
      setRenderQRCode(false);
      document.querySelector("input").focus();
      return;
    } else if (inputValue.length > 11 || inputValue.length < 11) {
      messageError("Phone number should contain only 11 numbers");
      return;
    } else {
      let WhatsappLink = `https://api.whatsapp.com/send?phone=55${inputValue}&text=${
        message ? encodeURIComponent(message) : ""
      }`;
      setRenderQRCode(true);
      setGoogleCharAPI(
        `https://chart.googleapis.com/chart?cht=qr&chs=450x450&chld=H&chl=${encodeURIComponent(
          WhatsappLink
        )}`
      );
      document.querySelector("input").value = "";
      document.getElementById("message").value = "";
    }
  }
};

export default WhatsAppGenerator;
