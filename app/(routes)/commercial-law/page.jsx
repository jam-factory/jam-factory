import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import Container from "@/app/_components/common/container/container";
import styles from "./commercial-law-page.module.scss";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { COMMERCIAL_METADATA } from "@/app/_data/metadata";

export const metadata = outputMetadata(
  COMMERCIAL_METADATA.title,
  COMMERCIAL_METADATA.description,
  COMMERCIAL_METADATA.slug
);

export default function CommercialLawPage() {
  return (
    <main className={styles.main}>
      <SubMv
        jpTitle={
          <>
            特定商取引法に
            <br className={styles.brSp} />
            基づく表記
          </>
        }
        enTitle="COMMERCIAL LAW"
        breadcrumbPaths={[{ name: "特定商取引法に基づく表記" }]}
      />

      <div className={styles.body}>
        <Container>
          <div className={styles.bodyContent}>
            <div className={styles.contentInner}>
              <dl className={styles.list}>
                <div className={styles.item}>
                  <dt>販売業者名</dt>
                  <dd>赤尾 起弥</dd>
                </div>
                <div className={styles.item}>
                  <dt>代表責任者</dt>
                  <dd>赤尾 起弥</dd>
                </div>
                <div className={styles.item}>
                  <dt>住所</dt>
                  <dd>
                    住所については、お問い合わせ先メールアドレスにてご請求をいただければ、遅滞なく開示いたします。
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>電話番号</dt>
                  <dd>
                    電話番号については、お問い合わせ先メールアドレスにてご請求をいただければ、遅滞なく開示いたします。
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>メールアドレス</dt>
                  <dd>jam.factory.subscription@gmail.com</dd>
                </div>
                <div className={styles.item}>
                  <dt>ホームページURL</dt>
                  <dd>https://jam-factory.tech</dd>
                </div>
                <div className={styles.item}>
                  <dt>サービスの内容</dt>
                  <dd>各サービス詳細ページをご参照ください。</dd>
                </div>
                <div className={styles.item}>
                  <dt>サービスの期間</dt>
                  <dd>当サイトに定められたサブスクリプション料金をお支払い頂いている期間</dd>
                </div>
                <div className={styles.item}>
                  <dt>販売価格</dt>
                  <dd>各サービス詳細ページをご参照ください。</dd>
                </div>
                <div className={styles.item}>
                  <dt>サービス代金以外の必要料金</dt>
                  <dd>
                    <ul>
                      <li>消費税（10%）</li>
                      <li>Stripe決済手数料</li>
                      <li>当サイトのページ、コンテンツの閲覧、ダウンロード等に関するインターネット接続料金</li>
                      <li>通信料金</li>
                    </ul>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>役務の提供時期</dt>
                  <dd>当方で決済処理確認後即時提供致します。</dd>
                </div>
                <div className={styles.item}>
                  <dt>決済方法と決済時期</dt>
                  <dd>
                    Stripe決済（クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から 3
                    日以内にお振り込みいただく必要があります。）
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>契約の申込みの撤回又は解除</dt>
                  <dd>サービスの性質上、ご購入後のキャンセル・返金はできかねます。</dd>
                </div>
                <div className={styles.item}>
                  <dt>中途解約について</dt>
                  <dd>
                    <ol>
                      <li>当方に申し出て解約手続きをしてください。</li>
                      <li>途中解約した場合であっても、返金はできかねます。</li>
                    </ol>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
