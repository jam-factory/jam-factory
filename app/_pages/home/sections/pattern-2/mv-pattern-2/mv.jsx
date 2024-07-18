import styles from "./mv.module.scss";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import Btn from "@/app/_components/common/btn/btn";
import MvImg from "@/app/_components/home/mv-img/mv-img";

export default function Mv() {
  return (
    <section className={styles.mv}>
      <p className={styles.intro}>個人・小規模事業者様向け</p>
      <h1 className={styles.title}>
        制作費0円！
        <br className={styles.brSp} />
        月額3,280円からの
        <br />
        サブスク型ホームページ
        <br className={styles.brSp} />
        制作サービス
      </h1>

      <MvImg />

      <div className={styles.btns}>
        <div className={styles.btn}>
          <Btn href="/contact" icon="arrow">
            お問い合わせ
          </Btn>
        </div>
        <div className={styles.btn}>
          <Btn href="/plan" theme="secondary-reverse" icon="arrow">
            料金プラン
          </Btn>
        </div>
      </div>
    </section>
  );
}
