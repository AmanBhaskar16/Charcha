import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css'

function App() {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Charcha</h2>
    </>
  )
}

export default App
