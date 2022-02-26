import React from "react";
import Image from "next/image";
import styles from "./HeaderLogo.module.sass";

const HeaderLogo = () => {
  return (
    <div className={styles.header_logo}>
      <Image
        src="/netflix-logo.svg"
        alt="Netflix logo"
        width={104}
        height={32}
      />
    </div>
  );
};

export default HeaderLogo;
