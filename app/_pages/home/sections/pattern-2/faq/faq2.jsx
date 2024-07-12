import Container from "@/app/_components/common/container/container";
import Link from "next/link";
import styles from "./faq.module.scss";
import { IoArrowForward } from "react-icons/io5";

export default function Faq2() {
  return (
    <section className={styles.faq}>
      <Container>
        <span className={styles.en}>Q&A</span>
        <h2>よくあるご質問</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.question}>
              <span className={styles.qIcon}>Q.</span>
              <h3>サーバーの設定やドメインの取得は必要ですか？</h3>
            </div>
            <div className={styles.answer}>
              <span className={styles.aIcon}>A.</span>
              <div>
                <p>
                  いいえ、必要ありません。サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します！
                </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.question}>
              <span className={styles.qIcon}>Q.</span>
              <h3>サーバー代やドメイン代などは月額料金に含まれますか？</h3>
            </div>
            <div className={styles.answer}>
              <span className={styles.aIcon}>A.</span>
              <div>
                <p>
                  はい、全ての費用が月額料金に含まれております。追加料金は有料オプションをご希望の場合のみ発生します。
                </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.question}>
              <span className={styles.qIcon}>Q.</span>
              <h3>解約する場合は、違約金がかかりますか？</h3>
            </div>
            <div className={styles.answer}>
              <span className={styles.aIcon}>A.</span>
              <div>
                <p>
                  いいえ、違約金は発生しませんので、いつでも解約可能です。ただし、解約申込をした月の翌月分の費用が発生します。
                  <br />
                  年契約の場合は返金できません。
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className={styles.linkWrap}>
          <Link href="/" className={styles.link}>
            <span>よくあるご質問を見る</span>
            <div className={styles.icon}>
              <IoArrowForward />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
