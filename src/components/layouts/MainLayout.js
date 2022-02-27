import React from "react";
import { useRouter } from "next/router";
import HeaderLogo from "../header/HeaderLogo/HeaderLogo";
import HeaderMenu from "../header/HeaderMenu/HeaderMenu";
import HeaderToolbar from "../header/HeaderToolbar/HeaderToolbar";
import Footer from "../footer/Footer";
import styles from "./MainLayout.module.sass";

const MainLayout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <header className={styles.header_main}>
        <HeaderLogo />
        {router.pathname == "/signup" ? <></> : <HeaderMenu />}

        <HeaderToolbar />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
