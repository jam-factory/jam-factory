"use client";

import Link from "next/link";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import styles from "./hamburger-menu.module.scss";

export default function HamburgerMenu() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  const closeHamburgerMenu = () => {
    setHamburgerMenuIsOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${hamburgerMenuIsOpen && styles.isOpen}`}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <li>
            <Link href="/#point">選ばれる理由</Link>
          </li>
          <li>
            <Link href="/plan">料金プラン</Link>
          </li>
          <li>
            <Link href="/#flow">制作の流れ</Link>
          </li>
          <li>
            <Link href="/faq">よくあるご質問</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
