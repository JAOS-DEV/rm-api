import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

export const Character = () => {
  const { id } = useParams();
  console.log(id);

  const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          dimension
          residents {
            name
            image
          }
        }
        location {
          name
          dimension
        }
        image
        episode {
          id
          name
          air_date
          characters {
            name
            image
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  console.log(data);

  return (
    <Box
      data-testid="character-test-id"
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '20px',
          width: '50%',
        }}
      >
        <img src={data.character.image} alt={data.character.name} width={'100%'} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          padding: '40px',
          width: '50%',
          height: '100%',
        }}
      >
        <h1>{data.character.name}</h1>
        <ul>
          <li style={{ padding: '10px' }}>
            Gender: <strong> {data.character.gender}</strong>
          </li>
          <li style={{ padding: '10px' }}>
            Species: <strong> {data.character.species}</strong>
          </li>
          <li style={{ padding: '10px' }}>
            Status: <strong> {data.character.status}</strong>
          </li>
          <li style={{ padding: '10px' }}>
            Origin: <strong> {data.character.origin.name}</strong>
          </li>
          <li style={{ padding: '10px' }}>
            Location: <strong> {data.character.location.name}</strong>
          </li>
          <li>
            Episodes:
            {data.character.episode.map((ep: any, index: any) => {
              return (
                <p key={ep.id}>
                  {index + 1}.<strong>{ep.name}</strong>
                </p>
              );
            })}
          </li>
        </ul>
      </Box>
    </Box>
  );
};
