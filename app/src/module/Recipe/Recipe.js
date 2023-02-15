import React, { useEffect } from "react";
import { onGetRecipe } from "../actions";
import {useDispatch, useSelector} from 'react-redux';
import Display from "./Display";

const Recipe = () => {
  const recipeData = useSelector((state) => state.recipe);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetRecipe());
  });

  return (
    <div>
      <Display recipeData={recipeData} />
    </div>
  );
};

export default Recipe;
