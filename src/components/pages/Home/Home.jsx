import React from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.containerButtons}>
      <h2>Generate link to</h2>
      <Link to="/siteqrcodegenerator">
        <Button
          TITLE="Generate for websites or social networks"
          ID={styles.socials}
        />
      </Link>
      <Link to="/whatsappqrcodegenerator">
        <Button TITLE="Generate for WhatsApp Contact" ID={styles.whatsapp} />
      </Link>
    </div>
  );
};

export default Home;
