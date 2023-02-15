import * as actions from "./actionType";

//central storage (store state)
const initState = {
  recipe: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_RECIPE_DATA:
      return { ...state, recipe: action.payload };

      default: 
      return state;
  }
};

export default reducer;
