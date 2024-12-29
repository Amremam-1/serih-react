import { menuList } from "../utils/menuList"
import { useEffect, useState } from "react"

const useFilterMenu = (fromDrop) => {
  const [filteredList, setFilteredList] = useState(menuList)
  const [isOpen, setIsOpen] = useState(true)
  const [menuType, setMenuType] = useState()

  //   const filteredList = menuList;

  const chooseListHandler = (type) => {
    setMenuType(type)
    const filteredMenu = menuList.filter((item) => item.typeEn === type)

    // setIsOpen(true);
    setFilteredList(filteredMenu)
    setIsOpen(false)
  }
  //   console.log("--filteredList: ", filteredList);

  //   setFilteredList([...filteredList]);
  useEffect(() => {}, [menuType])

  return [filteredList, chooseListHandler, isOpen, menuType]
}

export default useFilterMenu
