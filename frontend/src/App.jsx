import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landingpage from './components/Landingpage';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}
