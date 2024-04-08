import React, { useState } from "react";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import { IoIosArrowBack } from "react-icons/io";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    currentPage > 1 && currentPage < 6 && setCurrentPage(currentPage - 1);
  };

  const handleOptionSelect = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <ProgressBar currentPage={currentPage} totalPages={5} prev={prevPage} />
      {currentPage === 1 && <Page1 onNext={handleOptionSelect} />}
      {currentPage === 2 && <Page2 onNext={handleOptionSelect} />}
      {currentPage === 3 && <Page3 onNext={handleOptionSelect} />}
      {currentPage === 4 && <Page4 onNext={handleOptionSelect} />}
      {currentPage === 5 && <Page5 onNext={handleOptionSelect} />}
      {currentPage === 6 && <Page6/>}
    </div>
  );
}

function ProgressBar({ currentPage, totalPages, prev }) {
  const progress = (currentPage / totalPages) * 100 + "%";

  if (currentPage === 6) {
    return (
      <div className="flex items-center">
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="ml-10">
        <button onClick={() => prev()}><IoIosArrowBack /></button>
      </div>
      <div
        className="m-10 progress-bar h-1 bg-green-500"
        style={{ width: progress }}
      ></div>
    </div>
  );
}


export default App;
