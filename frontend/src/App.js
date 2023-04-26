import "./App.css";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from "./components/Footer/Footer";
import Budget from "./components/Budget";
import SignUp from "./components/Choice";
import Signup from "./components/Signup";
import LocalRegisteration from "./components/LocalRegisteration";
import Chat from "./components/Chat";
import CardPage from "./components/CardPage";
import IndiaPage from "./components/Recommend/IndiaPage";
// import Header from './components/header/Header';
import Varanasi from "./components/Varanasi";
import RajeshSharma from "./components/RajeshSharma";
import Navbar from "./components/Navbar";
import RecommendOnQuery from "./components/RecommendOnQuery";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/sign-up/signup"
          element={<Signup showAlert={showAlert} />}
        />
        <Route path="/indiapage" element={<IndiaPage />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/recommend" element={<RecommendOnQuery />} />
        <Route path="/local" element={<LocalRegisteration />} />
        <Route path="/vara" element={<Varanasi />} />
        <Route path="/raja" element={<RajeshSharma />} />
      </Routes>
      {/* <MessengerCustomerChat
    pageId="100091854913747"
    appId="574453728119891"
   
  /> */}
      <Chat />
      <Footer />
    </>
  );
}

export default App;
