import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./Signup.module.sass";

const Signup = () => {
  return (
    <Link href="/signup">
      <a className={styles.btn_sign_up}>
        Finish Sign Up
        <Icon className={styles.btn_sign_up_icon} icon="ep:arrow-right-bold" />
      </a>
    </Link>
  );
};

export default Signup;
