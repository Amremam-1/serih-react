import styles from "./styles.module.scss"
import { TbMeat } from "react-icons/tb"
import { IoFishOutline } from "react-icons/io5"
import { GiChicken } from "react-icons/gi"
import { GiShrimp } from "react-icons/gi"
import { TbGrill } from "react-icons/tb"
import { LuCupSoda } from "react-icons/lu"
import { TbLayoutGridAdd } from "react-icons/tb"
// import { useCallback, useEffect, useState } from "react";

const menuList = [
  {
    id: "01",
    titleAr: "لحم",
    titleEn: "",
    typeEn: "Meat",
    link: "/",
    icon: <TbMeat className={styles.icon} />,
  },
  {
    id: "02",
    titleAr: "دجاج",
    titleEn: "",
    typeEn: "Chicken",
    link: "/",
    icon: <GiChicken className={styles.icon} />,
  },
  {
    id: "03",
    titleAr: "سمك",
    titleEn: "",
    typeEn: "Fish",
    link: "/",
    icon: <IoFishOutline className={styles.icon} />,
  },
  {
    id: "04",
    titleAr: "جمبري",
    titleEn: "",
    typeEn: "Shrimp",
    link: "/",
    icon: <GiShrimp className={styles.icon} />,
  },
  {
    id: "05",
    titleAr: "شيه",
    typeEn: "Grill",
    titleEn: "",
    link: "/",
    icon: <TbGrill className={styles.icon} />,
  },
  {
    id: "06",
    titleAr: "المشروبات",
    typeEn: "Drinks",
    titleEn: "",
    link: "/",
    icon: <LuCupSoda className={styles.icon} />,
  },
  {
    id: "07",
    titleAr: "إضافة",
    typeEn: "Addition",
    titleEn: "",
    link: "/",
    icon: <TbLayoutGridAdd className={styles.icon} />,
  },
]

const FixedMenu = ({ chooseListHandler, menuType }) => {
  return (
    <div className={styles.fixedMenu}>
      <ul className={styles.menuList}>
        {menuList?.map((item, index) => (
          <li
            onClick={() => chooseListHandler(item.typeEn)}
            className={
              item.typeEn === menuType ? styles.menuItemActive : styles.menuItem
            }
            key={index}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FixedMenu
