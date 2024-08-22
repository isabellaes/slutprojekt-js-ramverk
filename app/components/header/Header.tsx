"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "./biblioteket.png";
import Search from "../search/Search";
import styles from "./header.module.scss";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.link}>
        <Image height={80} src={logo} alt="logotyp"></Image>
      </Link>

      <nav>
        <Link href={"/"} className={styles.link}>
          <h3>Home</h3>
        </Link>
        <h2>|</h2>
        <Link href={"/favourite"} className={styles.link}>
          <h3>My favourites</h3>
        </Link>
        <h2>|</h2>
        <Link href={"/statistics"} className={styles.link}>
          <h3>Statistics</h3>
        </Link>
      </nav>
      <div>
        <Suspense>
          <Search />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
