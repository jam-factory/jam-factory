import Image from "next/image";
import svg from "/public/mv-flat-illust.svg";
import Link from "next/link";

import styles from "./home-page.module.scss";
// import Plan from "../_pages/home/sections/plan/plan";
import Faq from "@/app/_pages/home/sections/faq/faq";
import Flow from "../_pages/home/sections/flow/flow";
import Cta from "../_pages/home/sections/cta/cta";
import About from "../_pages/home/sections/about/about";
import Feature from "../_pages/home/sections/feature/feature";
import Mv from "../_pages/home/sections/pattern-2/mv-pattern-2/mv";
import Concern from "../_pages/home/sections/pattern-2/concern/concern";
import Point from "../_pages/home/sections/pattern-2/point/point";
import Plan from "../_pages/home/sections/pattern-2/plan/plan";
import Flow2 from "../_pages/home/sections/pattern-2/flow/flow2";
import Faq2 from "../_pages/home/sections/pattern-2/faq/faq2";
import { IoArrowForward } from "react-icons/io5";
import Container from "../_components/common/container/container";
import lineIcon from "/public/icon-line.svg";
import lineIcon2 from "/public/icons8-line.svg";
import { LINE_URL_TOP_CONTACT } from "@/app/_data/url";
import { TOP_METADATA } from "../_data/metadata";
import { outputMetadata } from "../_utils/outputMetadata";

export const metadata = outputMetadata(TOP_METADATA.title, TOP_METADATA.description, TOP_METADATA.slug);

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.mv}>
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
      </div> */}

      {/* <About />

      <Feature />

      <Plan />

      <Cta />

      <Flow />

      <Faq /> */}

      {/* pattern 2 */}
      <Mv />
      <Concern />
      <Point />
      <Plan />
      <Flow2 />
      <Faq2 />

      <div className={styles.cta}>
        <Container>
          <span className={styles.en}>CONTACT</span>
          <h2>お問い合わせ</h2>
          <p>
            ビジネスを始めたての方、サイトについてよくわからない方のために、親身になってサポートします。
            <br />
            事前知識は一切必要ありませんので、お気軽にご相談ください。
          </p>

          <div className={styles.ctaBtns}>
            <Link className={styles.ctaBtn} href="/contact">
              <span>お問い合わせ</span>
              <div className={styles.icon}>
                <IoArrowForward />
              </div>
            </Link>

            <a href={LINE_URL_TOP_CONTACT} target="_blank" className={`${styles.ctaBtn} ${styles.isLine}`}>
              <span>LINEで相談</span>
              <div className={styles.icon}>
                <Image src={lineIcon2} alt="LINE" width={40} height={40} />
              </div>
            </a>
          </div>
        </Container>
      </div>
    </main>
  );
}
