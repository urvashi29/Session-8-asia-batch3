import * as actions from './actionType';
import recipeData from './Recipe/data';

export const onGetRecipe = () => {
    return {
        type: actions.GET_RECIPE_DATA,
        payload : recipeData.recipe
    }
}