import Container from "@/app/_components/common/container/container";
import styles from "./point.module.scss";

export default function Point() {
  return (
    <section className={styles.point} id="point">
      <Container>
        <span className={styles.en}>OUR FEATURES</span>
        <h2>
          Jam Factoryが選ばれる
          <br />
          4つのポイント
        </h2>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.thumb}></div>
            <div className={styles.text}>
              <span>POINT 01.</span>
              <h3>面倒なことはまるっとお任せ！</h3>
              <p>
                サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します！サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。バージョン管理もここに入れる。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}></div>
            <div className={styles.text}>
              <span>POINT 02.</span>
              <h3>お知らせやブログの更新も可能！</h3>
              <p>
                サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します！サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}></div>
            <div className={styles.text}>
              <span>POINT 03.</span>
              <h3>ホームページ公開後もサポートします！</h3>
              <p>
                サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します！サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}></div>
            <div className={styles.text}>
              <span>POINT 04.</span>
              <h3>オリジナルデザインを作成！</h3>
              <p>
                サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します！サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。サーバーの設定やドメインの取得、SSL証明書の取得など、面倒な作業は全て私たちが対応します。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
