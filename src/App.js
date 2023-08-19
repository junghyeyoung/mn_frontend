import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.js";
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import RecipeDetail from "./pages/Recipe/RecipeDetail.js";
import Notice from "./pages/Notice/NoticeDetail.js";
import Recipe from "./pages/Recipe/RecipeBoard.js";
import Party from "./pages/Party/PartyDetail.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import ResetPwd from "./pages/ResetPwd/ResetPwd.js";
import MyPage from "./pages/Mypage/Mypage.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/party" element={<Party />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPwd" element={<ResetPwd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recipeDetail" element={<RecipeDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
