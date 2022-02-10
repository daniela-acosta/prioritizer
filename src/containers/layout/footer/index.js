import style from "./style.module.css";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.divider} />
      <div className={style.contact}>
        <p>created by Daniela Acosta</p>
        <div className={style.social}>
          <FiGithub />
          <FiLinkedin />
          <FiTwitter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
