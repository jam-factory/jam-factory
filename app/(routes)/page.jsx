import Image from "next/image";
import svg from "/public/mv-flat-illust.svg";
import Link from "next/link";

import styles from "./home-page.module.scss";
import Plan from "../_pages/home/sections/plan/plan";
import Faq from "@/app/_pages/home/sections/faq/faq";
import Flow from "../_pages/home/sections/flow/flow";
import Cta from "../_pages/home/sections/cta/cta";
import About from "../_pages/home/sections/about/about";
import Feature from "../_pages/home/sections/feature/feature";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mv}>
        <div className={styles.head}>
          <h1>
            <span>Jam</span> Factory
          </h1>
          <p>ジャムファクトリー</p>
        </div>
        <ul className={styles.labels}>
          <li>
            <span>
              <span>高</span>セキュリティ
            </span>
          </li>
          <li>
            <span>
              <span>高</span>速表示
            </span>
          </li>
          <li>
            <span>
              <span>高</span>性能
            </span>
          </li>
        </ul>
        {/* <div className={styles.speech}>
          <span>初期費用 ¥29,800~</span>
        </div> */}
        <h2 className={styles.subTitle}>
          <span>低価格</span>・<span>自身で更新可能</span>な
          <br />
          ホームページを制作します
        </h2>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <Link href="/">お問い合わせ</Link>
          </div>
          <div className={`${styles.btn} ${styles.rev}`}>
            <Link href="/">料金プラン</Link>
          </div>
        </div>

        <div className={styles.illust}>
          <Image src={svg} alt="" />
        </div>
      </div>

      <About />

      <Feature />

      <Plan />

      {/* <Cta /> */}

      <Flow />

      <Faq />
    </main>
  );
}
