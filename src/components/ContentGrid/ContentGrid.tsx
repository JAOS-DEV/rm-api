import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CardItem from '../CardItem/CardItem';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const ContentGrid = () => {
  return (
    <Grid2 container spacing={5} border="1px solid green">
      <Grid2 sm={4}>
        <CardItem />
      </Grid2>
      <Grid2 sm={4}>
        <CardItem />
      </Grid2>
      <Grid2 sm={4}>
        <CardItem />
      </Grid2>
      <Grid2 sm={4}>
        <CardItem />
      </Grid2>
    </Grid2>
  );
};

export default ContentGrid;
