import styles from "./styles.module.scss"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaToggleOff } from "react-icons/fa6"

const LanguageBtn = () => {
  const [_, setLanguage] = useState(false)
  const { t, i18n } = useTranslation()

  return (
    <div className={styles.langBtn}>
      <span
        onClick={() => {
          i18n.changeLanguage("en")
          setLanguage(false)
        }}
        className={i18n.language === "en" ? styles.active : styles.ar}
      >
        English
      </span>
      <FaToggleOff className={styles.icon} />
      <span
        onClick={() => {
          i18n.changeLanguage("ar")
          setLanguage(false)
        }}
        className={i18n.language === "ar" ? styles.active : styles.en}
      >
        عربي
      </span>
    </div>
  )
}

export default LanguageBtn
