import SectionTitle from "@/app/_components/common/section-title/section-title";
import Container from "@/app/_components/common/container/container";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import styles from "./plan.module.scss";

export default function Plan() {
  return (
    <section className={styles.section}>
      <SectionTitle enTitle="Plans" jpTitle="料金プラン" />
      <Container>
        <ul className={styles.plans}>
          <li className={styles.plan}>
            <p className={styles.planText}>まずは小さく始めたい方向け</p>
            <h3 className={styles.planTitle}>シンプルプラン</h3>
            <p className={styles.planPrice}>
              <span>月額</span>
              <strong>6,980</strong>
              <span>
                円<small>(税込)</small>
              </span>
            </p>
            <p className={styles.planPriceSub}>
              （年契約: <del>83,760円</del> → 76,780円）
            </p>

            {/* <ul className={styles.planDesc}>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  3Pまで制作（+8,000円~/1P）
                </p>
              </li>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  シンプルなデザイン
                </p>
              </li>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  お問い合わせフォーム機能付
                </p>
              </li>
            </ul> */}
          </li>

          <li className={styles.plan}>
            <p className={styles.planText}>記事更新もしたい方向け</p>
            <h3 className={styles.planTitle}>スタンダードプラン</h3>
            <p className={styles.planPrice}>
              <span>月額</span>
              <strong>9,980</strong>
              <span>
                円<small>(税込)</small>
              </span>
            </p>
            <p className={styles.planPriceSub}>（年契約: 119,760円）</p>
            {/* <ul className={styles.planDesc}>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  5Pまで制作（+8,000円~/1P）
                </p>
              </li>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  シンプルなデザイン
                </p>
              </li>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  お問い合わせフォーム機能付
                </p>
              </li>
              <li className={styles.planDescItem}>
                <p>
                  <FaRegCircleCheck />
                  投稿機能付き
                </p>
              </li>
            </ul> */}
          </li>
        </ul>
      </Container>
    </section>
  );
}
