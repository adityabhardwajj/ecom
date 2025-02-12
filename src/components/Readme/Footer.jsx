import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/aditya-bhardwaj-961198232/"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/adityabhardwajj/" icon={BsGithub} />
          <Footer.Icon
            href="aadityabhardwaj5cs@gmail.com"
            icon={BsEnvelope}
          />
        
          
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
