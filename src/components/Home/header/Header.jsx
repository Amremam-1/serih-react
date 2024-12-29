import React from "react"
import { HiOutlineMenu } from "react-icons/hi"
import DropMenu from "../dropMenu/DropMenu"
import LanguageBtn from "../languageBtn/LanguageBtn"
import { useState } from "react"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"

const Header = ({ chooseListHandler, isOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuHandler = ({ filteredList, chooseListHandler }) => {
    setIsMenuOpen((prev) => !prev)
  }
  // if (isOpen === false) {
  //   setIsMenuOpen(false);
  // }

  const closeDropMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.btns}>
          <button onClick={toggleMenuHandler} className={styles.menu}>
            <HiOutlineMenu />
          </button>
          <LanguageBtn />
        </div>

        {isMenuOpen ? (
          <DropMenu
            closeDropMenu={closeDropMenu}
            chooseListHandler={chooseListHandler}
            isMenuOpen={isMenuOpen}
          />
        ) : null}
      </div>
    </header>
  )
}

export default Header
