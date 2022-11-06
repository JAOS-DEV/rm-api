import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const CardItem = ({ char, maxWidth, width }: { char?: any; maxWidth?: any; width?: any }) => {
  const charName = char?.name;
  const charImage = char?.image;
  const charSpecies = char?.species;
  const charLocation = char?.location?.name;
  const charOrigin = char?.origin?.name;
  const charStatus = char?.status;

  return (
    <Link to={`/${char.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ maxWidth: maxWidth, width: width }}>
        <CardActionArea>
          <CardMedia component="img" height="100%" image={charImage} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {charName}
            </Typography>
            <Typography component="span" variant="body2" color="text.secondary">
              <List>
                <ListItem disablePadding>
                  Location: <strong>&nbsp; {charLocation}</strong>
                </ListItem>
                <ListItem disablePadding>
                  Status: <strong>&nbsp; {charStatus}</strong>
                </ListItem>
                <ListItem disablePadding>
                  Species: <strong>&nbsp; {charSpecies}</strong>
                </ListItem>
                <ListItem disablePadding>
                  Origin: <strong>&nbsp; {charOrigin}</strong>
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardItem;
