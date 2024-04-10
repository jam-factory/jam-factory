import Container from "@/app/_components/common/container/container";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.en}>Jam Factory</span>
          <span className={styles.jp}>ジャムファクトリー</span>
        </div>

        <p className={styles.copy}>&copy; Jam Factory All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
