import Container from "@/app/_components/common/container/container";
import styles from "./plan.module.scss";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import PlanOverview from "@/app/_components/plan/plan-overview/plan-overview";

export default function Plan() {
  return (
    <section className={styles.plan}>
      <Container>
        <span className={styles.en}>PLANS</span>
        <h2>Jam Factoryの料金プラン</h2>

        <p className={styles.overview}>
          料金プランはたったの2つだけ！
          <br />
          更新機能なしのベーシックプランと、更新機能付きのCMSプランをご用意しています。
        </p>

        <PlanOverview />

        <div className={styles.bottom}>
          <span className={styles.plus}></span>

          <p className={styles.botText}>
            無料・有料含め多くの追加オプションを用意しております！
            <br />
            詳しくは料金ページからご確認ください。
          </p>

          <div className={styles.linkWrap}>
            <Link href="/" className={styles.link}>
              <span>料金ページを見る</span>
              <div className={styles.icon}>
                <IoArrowForward />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
