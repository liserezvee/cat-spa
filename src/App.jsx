import React from "react";
import ListItem from "./pages/ListItem";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path='/' element={<ListItem />}></Route>
        <Route path='/details/:fact' element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
