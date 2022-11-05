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

// App bar

function App() {
  const { loading, error, data } = useQuery(GET_BULK_DATA);
  console.log({ loading, error, data });

  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        style={{ padding: '20px', height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', border: '1px solid black' }}
      >
        <ContentGrid />
      </Container>
    </>
  );
}

export default App;
