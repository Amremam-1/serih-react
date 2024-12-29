import styles from "./styles.module.scss"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaToggleOff, FaToggleOn } from "react-icons/fa6"

const LanguageBtn = () => {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language) // تتبع اللغة الحالية
  const [iconToggled, setIconToggled] = useState(false) // تتبع حالة الأيقونة

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setCurrentLanguage(language)
    setIconToggled(!iconToggled)
  }

  return (
    <div className={styles.langBtn}>
      <span
        onClick={() => changeLanguage("en")}
        className={currentLanguage === "en" ? styles.active : styles.ar}
      >
        English
      </span>
      {iconToggled ? (
        <FaToggleOff className={styles.icon} />
      ) : (
        <FaToggleOn className={styles.icon} />
      )}
      <span
        onClick={() => changeLanguage("ar")}
        className={currentLanguage === "ar" ? styles.active : styles.en}
      >
        عربي
      </span>
    </div>
  )
}

export default LanguageBtn
