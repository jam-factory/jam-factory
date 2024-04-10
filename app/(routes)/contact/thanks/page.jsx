import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import styles from "./thanks-page.module.scss";
import Container from "@/app/_components/common/container/container";
import Btn from "@/app/_components/common/btn/btn";

export default function ThanksPage() {
  return (
    <main className={styles.main}>
      <SubMv jpTitle="お問い合わせ完了" enTitle="thanks" />

      <div className={styles.body}>
        <Container>
          <div className={styles.content}>
            <h2 className={styles.title}>お問い合わせありがとうございます。</h2>

            <div className={styles.text}>
              <p>
                2営業日以内に担当者からご連絡させていただきますので、しばらくお待ちくださいませ。
                <br />
                万が一返信メールが届かない場合や担当者からの連絡が無い場合は、お手数ですが
                <br />
                <a href="mailto:jam.factory.subscription@gmail.com">
                  jam.factory.subscription@gmail.com
                </a>
                <br />
                に直接ご連絡ください。
              </p>
            </div>

            <div className={styles.btn}>
              <Btn href="/" icon="arrow">
                TOPページに戻る
              </Btn>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
