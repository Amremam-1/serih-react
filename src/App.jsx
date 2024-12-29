import React from "react"
import Header from "./components/Home/header/Header"
import Footer from "./components/Home/footer/Footer"
import Body from "./components/Home/body/Body"
import useFilterMenu from "./hooks/useFilterMenu"

const App = () => {
  const date = new Date().getFullYear()
  const [filteredList, chooseListHandler, isOpen, menuType] = useFilterMenu()

  return (
    <main className="mainPage">
      <Header chooseListHandler={chooseListHandler} isOpen={isOpen} />
      <Body
        filteredList={filteredList}
        chooseListHandler={chooseListHandler}
        menuType={menuType}
      />
      <Footer date={date} />
    </main>
  )
}

export default App
