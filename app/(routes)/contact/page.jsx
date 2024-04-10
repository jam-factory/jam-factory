import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import styles from "./contact-page.module.scss";
import ContactForm from "@/app/_components/common/contact-form/contact-form";
import Container from "@/app/_components/common/container/container";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <SubMv jpTitle="お問い合わせ" enTitle="contact" />

      <div className={styles.body}>
        <Container className={styles.container}>
          <div className={styles.intro}>
            <p>
              ホームページ制作のご依頼やご質問などございましたら、
              <br />
              下記お問い合わせフォームの項目をご記入の上「送信する」ボタンよりお進みください。
            </p>
          </div>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </Container>
      </div>
    </main>
  );
}
