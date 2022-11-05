import React from "react";
import Footer from './layouts/Footer'
import { Outlet } from "react-router";

function App() {
  return (
    <div className="">
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
