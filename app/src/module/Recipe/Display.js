import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Display.css";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "30px",
}));

function searchFor(term) {
  return (x) => {
    return x.strCategory.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

const Display = ({ recipeData }) => {
  const [term, setTerm] = useState("");
  console.log(recipeData);

  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        id="recipe"
        label="Search recipe...."
        variant="outlined"
        onChange={searchHandler}
        type="text"
        style={{ marginTop: "20px" }}
      />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {recipeData.filter(searchFor(term)).map((recipe) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={recipe.idCategory}>
              <Item>
                <img src={recipe.strCategoryThumb} className="recipeImage" />
                <p>{recipe.strCategory}</p>
                <p>{recipe.strCategoryDescription.slice(0, 10)}</p>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Display;
