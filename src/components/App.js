import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Repositories from "./Repositories";

function App() {
  const [isRepo, setIsRepo] = React.useState(true);
  return (
    <>
      <Navbar isRepo={isRepo} setIsRepo={setIsRepo} />
      <MainContent>
        <SideBar />
        <Repositories isRepo={isRepo} setIsRepo={setIsRepo} />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
