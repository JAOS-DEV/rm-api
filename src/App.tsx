import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { GET_BULK_DATA } from './api/queries';
import { useQuery } from '@apollo/client';
import Container from '@mui/system/Container';
import Navbar from './components/Navbar/Navbar';
import ContentGrid from './components/ContentGrid/ContentGrid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Character } from './components/Character/Character';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container
        maxWidth="lg"
        style={{
          padding: '80px 10px',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<ContentGrid />} />
          <Route path=":id" element={<Character />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
