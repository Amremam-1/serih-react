import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"

const Footer = ({ date }) => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyRights}>
          <span>{t("hp-f01")}</span>
          <span className={styles.brand}>{t("hp-f02")}</span>
          <span>&copy; {date}</span>
        </p>
        <p className={styles.mbn}>
          <span className={styles.text}>{t("hp-f03")}</span>
          <a className={styles.link} href="http://www.mahercp.net/">
            MBN
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
