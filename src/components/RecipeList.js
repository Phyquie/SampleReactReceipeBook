
import './style.css';

import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const RecipeList = ({ recipes, deleteRecipe }) => {
  return (
    <Grid container spacing={4}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card className="card">
            <CardContent className="card-content">
              <Typography variant="h5" component="h2">
                {recipe.title}
              </Typography>
              <Typography variant="body2" component="ul">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {recipe.description}
              </Typography>
              
              <IconButton onClick={() => deleteRecipe(index)} style={{ marginTop: '1em' }}>
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
