import React from 'react';
import { Grid } from '@mui/material';
import CardItem from '../CardItem/CardItem';
import { useQuery } from '@apollo/client';
import { GET_BULK_DATA } from '../../api/queries';

const ContentGrid = () => {
  const { loading, error, data } = useQuery(GET_BULK_DATA);

  const results = data?.characters?.results;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {results.map((char: any) => (
        <Grid key={char.id} item xs={4} sm={4} md={4}>
          <CardItem char={char} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContentGrid;
