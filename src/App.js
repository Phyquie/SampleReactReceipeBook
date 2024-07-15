// src/App.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './components/style.css';  // Import your styles

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Container maxWidth="lg" style={{ marginTop: '2em' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Recipe Book
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '1em', position: 'sticky', top: '2em' }}>
              <RecipeForm addRecipe={addRecipe} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
