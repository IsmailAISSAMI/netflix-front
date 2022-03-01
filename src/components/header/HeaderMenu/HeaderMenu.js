import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./HeaderMenu.module.sass";

const HeaderMenu = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin"));
  }, []);

  return (
    <div className={styles.header_menu}>
      <nav>
        {router.pathname == "/" ? (
          <></>
        ) : (
          <ul>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <Link href="/browse">
                <a>Films</a>
              </Link>
            </li>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <Link href="/">
                <a>My List</a>
              </Link>
            </li>
            {isAdmin !== null &&
            isAdmin !== undefined &&
            isAdmin !== {} &&
            isAdmin !== false ? (
              <>
                <li
                  className={
                    router.pathname == "/userAdmin" ? styles.active : ""
                  }
                >
                  <Link href="/monitoringUsers">
                    <a>Users</a>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/productAdmin" ? styles.active : ""
                  }
                >
                  <Link href="/monitoringMovies">
                    <a>Movies</a>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/genreAdmin" ? styles.active : ""
                  }
                >
                  <Link href="/monitoringCategories">
                    <a>Categories</a>
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default HeaderMenu;
