import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import Container from "@/app/_components/common/container/container";
import styles from "./commercial-law-page.module.scss";

export default function CommercialLawPage() {
  return (
    <main className={styles.main}>
      <SubMv
        jpTitle="特定商取引法に基づく表記"
        enTitle="COMMERCIAL LAW"
        breadcrumbPaths={[{ name: "特定商取引法に基づく表記" }]}
      />

      <div className={styles.body}>
        <Container>
          <div className={styles.bodyContent}>
            <div className={styles.contentInner}>
              <dl className={styles.list}>
                <div className={styles.item}>
                  <dt>サービス名</dt>
                  <dd>Jam Factory</dd>
                </div>
                <div className={styles.item}>
                  <dt>事業者名</dt>
                  <dd>赤尾 起弥</dd>
                </div>
                <div className={styles.item}>
                  <dt>住所</dt>
                  <dd>住所入れる</dd>
                </div>
                <div className={styles.item}>
                  <dt>メールアドレス</dt>
                  <dd>mail@mailaddress.com</dd>
                </div>
                <div className={styles.item}>
                  <dt>電話番号</dt>
                  <dd>090-1010-1010</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
