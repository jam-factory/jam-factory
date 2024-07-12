import Container from "@/app/_components/common/container/container";
import styles from "./concern.module.scss";
import Btn from "@/app/_components/common/btn/btn";
import Link from "next/link";
import { LINE_URL_TOP_CONCERN } from "@/app/_data/url";

export default function Concern() {
  return (
    <section className={styles.concern}>
      <Container>
        <span className={styles.en}>CONCERNS</span>
        <h2>こんなお悩みありませんか？</h2>

        <ul>
          <li>
            <p>名刺代わりのサイトが欲しい・・・</p>
          </li>
          <li>
            <p>自分でサイトを作ってみたけど、うまくいかない・・・</p>
          </li>
          <li>
            <p>サイトの制作をお願いしたが、莫大な費用がかかる・・・</p>
          </li>
          <li>
            <p>ビジネスを始めたばかりなので、まずは小さく始めたい・・・</p>
          </li>
          <li>
            <p>サイトの表示速度やセキュリティにもこだわりたい・・・</p>
          </li>
          <li>
            <p>バージョン管理やドメイン取得など、難しい・・・</p>
          </li>
        </ul>
      </Container>

      <div className={styles.box}>
        <div className={styles.boxInner}>
          <p className={styles.acc}>まずは私たちにご相談ください！</p>
          <p className={styles.text}>
            ビジネスを始めたての方、ホームページについてよくわからない方のために、
            <br />
            親身になってサポートします。
            <br />
            事前知識は一切必要ありませんので、お気軽にご相談ください。
          </p>
          <div className={styles.btns}>
            <Link className={styles.btn} href="/contact">
              お問い合わせ
            </Link>
            <a href={LINE_URL_TOP_CONCERN} target="_blank" className={`${styles.btn} ${styles.isLine}`}>
              LINEで相談
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bg}>
        <span>CONTACT US! CONTACT US! CONTACT US! CONTACT US! </span>
        <span>CONTACT US! CONTACT US! CONTACT US! CONTACT US! </span>
      </div>
    </section>
  );
}
