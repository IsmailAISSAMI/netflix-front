import React from 'react';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import Footer from '../footer/Footer';
import styles from "./MainLayout.module.sass";


const MainLayout = ({children}) => {
    return (
        <>
            <header className={styles.header_main}>
                <HeaderLogo />
                <HeaderMenu />
                <HeaderToolbar/>
            </header>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default MainLayout;