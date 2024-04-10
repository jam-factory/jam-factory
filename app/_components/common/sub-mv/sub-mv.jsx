import styles from "./sub-mv.module.scss";

export default function SubMv({ jpTitle, enTitle }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title} data-en={enTitle}>
        {jpTitle}
      </h1>
    </section>
  );
}
