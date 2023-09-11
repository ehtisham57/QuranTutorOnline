import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Create this CSS module

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Logo</div>
      <div className={styles.menu}>
        <Link href="/">HOME</Link>
        <Link href="/About">ABOUT</Link>
        <Link href="/Pricing">PRICING</Link>
        <Link href="/Contact">CONTACT</Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
