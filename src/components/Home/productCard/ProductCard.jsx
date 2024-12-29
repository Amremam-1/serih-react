import { TbMeat } from "react-icons/tb"
import { IoFishOutline } from "react-icons/io5"
import { GiChicken } from "react-icons/gi"
import { GiShrimp } from "react-icons/gi"
import { TbGrill } from "react-icons/tb"
import { LuCupSoda } from "react-icons/lu"
import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"

const ProductCard = ({ item }) => {
  const { t, i18n } = useTranslation()

  const {
    id,
    typeEn,
    typeAr,
    nameEn,
    nameAr,
    cal,
    price,
    currencyAr,
    currencyEn,
    imgs,
  } = item

  return (
    <li className={styles.productCard}>
      <div className={styles.iconBox}>
        {typeEn === "Meat" ? <TbMeat className={styles.icon} /> : null}
        {typeEn === "Chicken" ? <GiChicken className={styles.icon} /> : null}
        {typeEn === "Fish" ? <IoFishOutline className={styles.icon} /> : null}
        {typeEn === "Shrimp" ? <GiShrimp className={styles.icon} /> : null}
        {typeEn === "Grill" ? <TbGrill className={styles.icon} /> : null}
        {typeEn === "Drinks" ? <LuCupSoda className={styles.icon} /> : null}
      </div>
      <div className={styles.image}>
        <img
          src={`/images/list/${imgs[0]}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={styles.cardImg}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>
          {i18n.language === "ar" ? nameAr : nameEn}
        </h3>
        <div className={styles.details}>
          <p className={styles.price}>
            {price} {i18n.language === "ar" ? currencyAr : currencyEn}
          </p>
          {cal ? (
            <p className={styles.cal}>
              {cal} {t("hp-lst02")}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  )
}

export default ProductCard
