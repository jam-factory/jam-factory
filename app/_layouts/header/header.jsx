import Link from "next/link";
import styles from "./header.module.scss";
import { LINE_URL_HEADER } from "@/app/_data/url";
import HamburgerBtn from "@/app/_components/common/hamburger-btn/hamburger-btn";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>
          <span>Jam</span> Factory
        </span>
        <span>ジャムファクトリー</span>
      </Link>
      <nav className={styles.nav}>
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
        <Link href="/contact" className={styles.btn}>
          お問い合わせ
        </Link>
        <Link href={LINE_URL_HEADER} target="_blank" className={`${styles.btn} ${styles.isDarker}`}>
          LINEで相談
        </Link>
      </nav>
      <HamburgerBtn />
    </header>
  );
}
