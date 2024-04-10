import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Jam</span> Factory
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">サービス</Link>
          </li>
          <li>
            <Link href="/">私たちの強み</Link>
          </li>
          <li>
            <Link href="/">プラン</Link>
          </li>
        </ul>
        <Link href="/contact" className={styles.btn}>
          お問い合わせ
        </Link>
      </nav>
    </header>
  );
}
