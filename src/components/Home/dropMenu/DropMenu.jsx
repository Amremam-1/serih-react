import React from "react"
import styles from "./styles.module.scss"
import { TbMeat } from "react-icons/tb"
import { IoFishOutline } from "react-icons/io5"
import { GiChicken } from "react-icons/gi"
import { GiShrimp } from "react-icons/gi"
import { TbGrill } from "react-icons/tb"
import { LuCupSoda } from "react-icons/lu"
import { TbLayoutGridAdd } from "react-icons/tb"
import { useTranslation } from "react-i18next"

const menuList = [
  {
    id: "01",
    titleAr: "لحم",
    titleEn: "Meat",
    typeEn: "Meat",
    link: "/",
    icon: <TbMeat className={styles.icon} />,
  },
  {
    id: "02",
    titleAr: "دجاج",
    titleEn: "Chicken",
    typeEn: "Chicken",
    link: "/",
    icon: <GiChicken className={styles.icon} />,
  },
  {
    id: "03",
    titleAr: "سمك",
    titleEn: "Fish",
    typeEn: "Fish",
    link: "/",
    icon: <IoFishOutline className={styles.icon} />,
  },
  {
    id: "04",
    titleAr: "جمبري",
    titleEn: "Shrimp",
    typeEn: "Shrimp",
    link: "/",
    icon: <GiShrimp className={styles.icon} />,
  },
  {
    id: "05",
    titleAr: "شيه",
    typeEn: "Grill",
    titleEn: "Grill",
    link: "/",
    icon: <TbGrill className={styles.icon} />,
  },
  {
    id: "06",
    titleAr: "المشروبات",
    typeEn: "Drinks",
    titleEn: "Drinks",
    link: "/",
    icon: <LuCupSoda className={styles.icon} />,
  },
  {
    id: "07",
    titleAr: "إضافة",
    titleEn: "Extra",
    link: "/",
    icon: <TbLayoutGridAdd className={styles.icon} />,
  },
]

const DropMenu = ({ closeDropMenu, chooseListHandler, isMenuOpen }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className={isMenuOpen ? styles.dropMenu : styles.dropMenuHidden}>
      <ul className={styles.menuList}>
        {menuList?.map((item, index) => (
          <li
            onClick={() => {
              chooseListHandler(item.typeEn)
              closeDropMenu()
            }}
            className={styles.menuItem}
            key={index}
          >
            {item.icon}
            <span className={styles.text}>
              {i18n.language === "en" ? item.titleEn : item.titleAr}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropMenu
