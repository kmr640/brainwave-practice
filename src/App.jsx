import React from "react"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hi There!</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ButtonGradient />
      </div>
    </>
  )
}

export default App
