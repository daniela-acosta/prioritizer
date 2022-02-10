import Header from "./header";
import Footer from "./footer";

import style from "./style.module.css";

function Layout({ children }) {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
