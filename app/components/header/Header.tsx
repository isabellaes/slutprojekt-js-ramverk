"use client";

import Link from "next/link";
import "./header.scss";
import Image from "next/image";
import logo from "./lib-logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <Link href={"/"} className="link">
        <Image height={80} src={logo} alt="logotyp"></Image>
      </Link>

      <nav>
        <Link href={"/"} className="link">
          <h3>Home</h3>
        </Link>
        <h2>|</h2>
        <Link href={"/favourite/books"} className="link">
          <h3>My favourite books</h3>
        </Link>
        <h2>|</h2>
        <Link href={"/favourite/authors"} className="link">
          <h3>My favourite authors</h3>
        </Link>
        <h2>|</h2>
        <Link href={"/my-readlist"} className="link">
          <h3>My read-list</h3>
        </Link>
      </nav>
      <div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
