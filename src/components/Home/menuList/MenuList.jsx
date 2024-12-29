import React from "react"
import styles from "./styles.module.scss"
import { additionList } from "../../../utils/additionList"
import { useTranslation } from "react-i18next"
import ProductCard from "../productCard/ProductCard"

const MenuList = ({ filteredList }) => {
  const { t, i18n } = useTranslation()
  return (
    <div className={styles.menuList}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {filteredList?.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </ul>
        <div className={styles.addition} id="additions">
          <h3 className={styles.adtTitle}>{t("hp-lst01")}</h3>
          <ul className={styles.additionList}>
            {additionList?.map((item, index) => (
              <li className={styles.adItem} key={index}>
                <span className={styles.title}>
                  {i18n.language === "ar" ? item.titleAr : item.titleEn}:
                </span>
                <span className={styles.value}>{item.price}</span>
                <span className={styles.currency}>
                  {i18n.language === "ar" ? item.currencyAr : item.currencyEn}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuList
