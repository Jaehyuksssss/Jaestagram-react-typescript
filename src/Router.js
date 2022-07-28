import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/Main';
import Feed from '../src/pages/Feed';
import Footer from './pages/components/Footer';
import Login from 'pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
