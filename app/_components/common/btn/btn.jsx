import Link from "next/link";
import Image from "next/image";
import styles from "./btn.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { LuMailOpen } from "react-icons/lu";
import lineIcon from "/public/icon-line.svg";

export default function Btn({ href, theme, icon, children }) {
  const getThemeClass = (theme) => {
    switch (theme) {
      case "main-reverse": {
        return styles.themeMainReverse;
      }
      case "line": {
        return styles.themeLine;
      }
      default:
        return styles.themeMain;
    }
  };
  const themeClass = getThemeClass(theme);

  return (
    <Link href={href} className={`${styles.btn} ${themeClass}`}>
      <span className={styles.text}>{children}</span>

      {icon === "arrow" && (
        <span className={styles.icon}>
          <FaArrowRight className={styles.iconArrow} />
          <FaArrowRight className={styles.iconArrow} />
        </span>
      )}

      {icon === "mail" && (
        <span className={styles.icon}>
          <LuMail className={styles.iconMail} />
        </span>
      )}

      {icon === "line" && (
        <span className={styles.icon}>
          <Image src={lineIcon} alt="LINE" width={40} height={40} />
        </span>
      )}
    </Link>
  );
}
