import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';
import NotFound404 from './components/notFound404/NotFound404';
import './styleReset.scss';
import './index.scss';
import Forms from './components/form/Forms';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="about/*" element={<Main />} />
      <Route path="forms" element={<Forms />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  </div>
);

export default App;
