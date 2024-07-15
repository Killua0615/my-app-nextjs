// pages/characters.js

import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Container, Grid, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    margin: 'auto',
    marginBottom: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const Characters = ({ characters }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        HUNTER×HUNTER character lists
      </Typography>
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} key={character.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={character.image_url}
                title={character.name}
              />
              <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                {character.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Characters.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/characters');
  const characters = await res.json();
  return { characters };
};

export default Characters;