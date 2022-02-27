import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./HeaderMenu.module.sass";

const HeaderMenu = () => {
  const router = useRouter();
  return (
    <div className={styles.header_menu}>
      <nav>
        <ul>
          <li className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={router.pathname == "/tv-programmes" ? styles.active : ""}
          >
            <Link href="/tv-programmes">
              <a>Tv Programmes</a>
            </Link>
          </li>
          <li className={router.pathname == "/films" ? styles.active : ""}>
            <Link href="/Films">
              <a>Films</a>
            </Link>
          </li>
          <li className={router.pathname == "/my-list" ? styles.active : ""}>
            <Link href="/my-list">
              <a>My List</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
