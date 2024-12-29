import React from "react"
import styles from "./styles.module.scss"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { dropMenuList } from "../../../utils/dropMenuList"
import MenuList from "../menuList/MenuList"
import FixedMenu from "../fixedMenu/FixedMenu"
import { useTranslation } from "react-i18next"

const Body = ({ filteredList, chooseListHandler, menuType }) => {
  const { t, i18n } = useTranslation()
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img
              src="/images/logo-azoz-text.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className={styles.logoText}
            />
          </div>
          {/* <h1 className={styles.title}>سيريه عزوز</h1> */}
        </div>
        <ul className={styles.contactsList}>
          <li className={styles.contactItem}>
            <a className={styles.link} href="https://wa.me/9660598808808">
              {/* <span className={styles.text}>0598808808</span> */}
              <FaWhatsapp className={styles.whatsapp} />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a className={styles.link} href="tel:+966 0598808808">
              <span className={styles.text}>0598808808</span>
              <IoCall className={styles.phone} />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a
              className={styles.link}
              href="https://www.instagram.com/serih.azoz"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.text}>serih.azoz</span>
              <FaInstagram className={styles.insta} />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a
              className={styles.link}
              href="https://www.tiktok.com/@serihazoz"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.text}>serih.azoz</span>
              <FaTiktok className={styles.tiktok} />
            </a>
          </li>
        </ul>
        <ul className={styles.tabs}>
          {dropMenuList?.map((item, index) => (
            <li
              onClick={() => chooseListHandler(item.typeEn)}
              className={
                item.typeEn === menuType ? styles.tabActive : styles.tab
              }
              key={index}
            >
              {i18n.language === "ar" ? item.titleAr : item.titleEn}
            </li>
          ))}
        </ul>
        <MenuList filteredList={filteredList} />
        <FixedMenu chooseListHandler={chooseListHandler} menuType={menuType} />
      </div>
    </section>
  )
}

export default Body
