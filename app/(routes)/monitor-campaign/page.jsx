import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import styles from "./monitor-campaign-page.module.scss";
import Container from "@/app/_components/common/container/container";
import Link from "next/link";
import { LINE_URL } from "@/app/_data/url";
import Image from "next/image";
import Btn from "@/app/_components/common/btn/btn";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { CAMPAIGN_METADATA } from "@/app/_data/metadata";

export const metadata = outputMetadata(CAMPAIGN_METADATA.title, CAMPAIGN_METADATA.description, CAMPAIGN_METADATA.slug);

export default function MonitorCampaignPage() {
  return (
    <main className={styles.main}>
      <SubMv
        jpTitle="モニターキャンペーン"
        enTitle="MONITOR CAMPAIGN"
        breadcrumbPaths={[{ name: "モニターキャンペーン" }]}
        hasBorder
      />

      <div className={styles.body}>
        <Container>
          <section className={styles.overview}>
            <h2 className={styles.secTitle} data-en="CAMPAIGN BENEFITS">
              キャンペーン特典
            </h2>

            <div className={styles.benefit}>
              <div className={styles.benefitThumb}>
                <Image src="/images/monitor-campaign/benefit-price.png" width={1000} height={1000} alt="" />
              </div>
              <div className={styles.benefitContent}>
                <span className={styles.benefitNum}>BENEFIT 01.</span>
                <h3>全プランを通常料金の半額で利用可能！</h3>
                <div className={styles.benefitText}>
                  <p>
                    年払い（1年契約）のモニター様限定！初年度は、各プランを<strong>通常料金の50%オフ</strong>
                    でご利用いただけます。各プランの詳しい内容や料金については、<Link href="/plan">料金プラン</Link>
                    ページからご確認ください。
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.benefit}>
              <div className={styles.benefitThumb}>
                <Image src="/images/monitor-campaign/benefit-option.png" width={1000} height={1000} alt="" />
              </div>
              <div className={styles.benefitContent}>
                <span className={styles.benefitNum}>BENEFIT 02.</span>
                <h3>オプション料金は3万円まで無料！</h3>
                <div className={styles.benefitText}>
                  各プランをご利用いただくお客様には、<strong>オプションサービスを最大3万円分まで無料</strong>
                  でご提供いたします。追加の費用を気にせず、より充実したサービスを体験できる大変お得なチャンスです。詳しいオプション内容については、
                  <Link href="/plan#option">料金プランの追加オプション</Link>をご確認ください。
                </div>
              </div>
            </div>

            <div className={styles.benefit}>
              <div className={styles.benefitThumb}>
                <Image src="/images/monitor-campaign/benefit-voice.png" width={1000} height={1000} alt="" />
              </div>
              <div className={styles.benefitContent}>
                <span className={styles.benefitNum}>BENEFIT 03.</span>
                <h3>モニター様の声をサービスに反映！</h3>
                <div className={styles.benefitText}>
                  モニターキャンペーンにご参加いただいた皆様のフィードバックやご意見を元に、今後のサービスに反映させていただきます。実際にご利用いただく中で気づいた点やご要望をお伝えいただくことで、より使いやすく、お客様に最適なサービスへと進化させます。
                </div>
              </div>
            </div>
          </section>

          <section className={styles.require}>
            <h2 className={styles.secTitle} data-en="REQUIREMENTS">
              応募条件
            </h2>

            <div className={styles.requireBox}>
              <dl>
                <div>
                  <dt>定員</dt>
                  <dd>
                    先着5名様限定
                    <br />
                    定員に達し次第、募集を締め切らせていただきますので、お早めにお申し込みください。
                  </dd>
                </div>
                <div>
                  <dt>最低契約期間</dt>
                  <dd>
                    1年間
                    <br />
                    ※1年分を一括でお支払いいただくようお願いします。
                    <br />
                    ※割引適用期間中に解約された場合、残り月数分の返金はできませんので、ご了承ください。
                  </dd>
                </div>
                <div>
                  <dt>割引適用期間</dt>
                  <dd>
                    1年間
                    <br />
                    ※2年目以降は、通常通りのプラン料金となります。
                    <br />
                    ※オプション料金の無料枠は、初年度のみ適用されます。
                  </dd>
                </div>
                <div>
                  <dt>その他条件</dt>
                  <dd>
                    <ul>
                      <li>制作したホームページを、当サイトの実績として掲載可能な方</li>
                      <li>当サービスに関するアンケートにご回答いただける方</li>
                      <li>当サービスに対する評価やメリットなどを、「お客様の声」として掲載可能な方</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>

            <div className={styles.messageBox}>
              <div className={styles.message}>
                <p className={styles.messageText}>
                  <span>
                    まずはお気軽に
                    <br />
                    ご相談ください！
                  </span>
                </p>
                <p className={styles.messagePara}>
                  ホームページについて何も知らない、まずは話を聞いてみたいという場合でも
                  <br />
                  相談を受け付けておりますので、お気軽にご連絡ください。
                </p>
              </div>

              <p className={styles.count}>残り定員数：5名</p>

              <div className={styles.btns}>
                <div className={styles.btn}>
                  <Btn href="/contact" icon="arrow">
                    フォームで相談する
                  </Btn>
                </div>
                <div className={styles.btn}>
                  <Btn href={LINE_URL} theme="secondary" icon="line" isExternal>
                    LINEで相談する
                  </Btn>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </main>
  );
}
