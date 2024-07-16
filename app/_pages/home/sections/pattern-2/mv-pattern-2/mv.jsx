import svg from "/public/mv-flat-illust.svg";
import styles from "./mv.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import Btn from "@/app/_components/common/btn/btn";

export default function Mv() {
  return (
    <section className={styles.mv}>
      <p className={styles.intro}>個人・小規模事業者様向け</p>
      <h1 className={styles.title}>
        制作費0円！月額3,280円からの
        <br />
        サブスク型ホームページ制作サービス
      </h1>
      <div className={styles.img}>
        <Image src={svg} alt="" />
      </div>

      <div className={styles.btns}>
        <div className={styles.btn}>
          <Btn href="/contact" icon="arrow">
            お問い合わせ
          </Btn>
        </div>
        <div className={styles.btn}>
          <Btn href="/plan" theme="secondary-reverse" icon="arrow">
            料金プランを見る
          </Btn>
        </div>
      </div>
    </section>
  );
}
