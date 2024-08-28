"use client";

import styles from "./contact-form.module.scss";

export default function ContactForm() {
  return (
    <form action="https://ssgform.com/s/OgMmt0Oelk7X" method="post" className={styles.form} onSubmit={() => onSubmit}>
      <div className={styles.inner}>
        <p className={styles.info}>
          <span>*</span>は必須項目です。
        </p>
        <div className={styles.row}>
          <label htmlFor="your-name" className={`${styles.label} ${styles.isRequired}`}>
            お名前
          </label>
          <div className={`${styles.control}`}>
            <input
              type="text"
              id="your-name"
              name="お名前"
              placeholder="お名前"
              required="required"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="corp-name" className={styles.label}>
            法人名
          </label>
          <div className={`${styles.control}`}>
            <input
              type="text"
              id="corp-name"
              name="法人名"
              placeholder="株式会社ジャムファクトリー"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="tel" className={styles.label}>
            電話番号
          </label>
          <div className={`${styles.control}`}>
            <input type="tel" name="電話番号" placeholder="000-0000-0000" className={styles.input} />
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="email" className={`${styles.label} ${styles.isRequired}`}>
            メールアドレス
          </label>
          <div className={`${styles.control}`}>
            <input
              type="email"
              name="メールアドレス"
              placeholder="example@mail.com"
              required="required"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.row}>
          <label htmlFor="category" className={`${styles.label} ${styles.isRequired}`}>
            お問い合わせ内容
          </label>
          <div className={`${styles.control} ${styles.isSelect}`}>
            <select name="お問い合わせ内容" id="category" required="required" className={styles.select}>
              <option value="">選択してください</option>
              <option value="ホームページ制作を依頼したい">ホームページ制作を依頼したい</option>
              <option value="料金プランについてのご質問">料金プランについてのご質問</option>
              <option value="その他">その他</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <label htmlFor="detail" className={`${styles.label} ${styles.isRequired}`}>
            お問い合わせ詳細
          </label>
          <div className={`${styles.control}`}>
            <textarea
              name="お問い合わせ詳細"
              id="detail"
              placeholder="詳細を入力してください"
              required="required"
              className={styles.textarea}
            ></textarea>
          </div>
        </div>

        <div className={`${styles.row} ${styles.isBtn}`}>
          <button type="submit" className={styles.submitBtn}>
            送信する
          </button>
        </div>
      </div>
    </form>
  );
}
