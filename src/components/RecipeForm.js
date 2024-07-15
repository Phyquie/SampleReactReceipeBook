
import './style.css';

import React, { useState } from 'react';
import { Button, TextField, Grid, Paper } from '@mui/material';

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      description,
      ingredients: ingredients.split(',').map(ing => ing.trim())
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    setIngredients('');
  };

  return (
    <Paper style={{ padding: '1em' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ingredients (comma separated)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Procedure"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Recipe
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RecipeForm;
