import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV, SET_FILTERS } from "../actions/meals";

const initialState = {
  //list of all meals
  meals: MEALS,
  //meals that are chosen
  filteredMeals: MEALS,
  // marked meals
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      //check if the meal id is already favorite
      //so it can be changed
      // will return 1 if exist , or will return -1 if not exist
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      // mean its exist
      if (existingIndex >= 0) {
        // array of existing states
        const updateFav = [...state.favoriteMeals];
        // remove the id ,
        updateFav.splice(existingIndex, 1);
        // return old states + new favorite array
        return { ...state, favoriteMeals: updateFav };
      } else {
        // if the id wasn't not favorite

        // first get the meal that have same id from stored meals data in state
        const meal = state.meals.find(meal => meal.id === action.mealId);
        //then add it to old state favorite array

        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }

    case SET_FILTERS:
      //get the filter from user
      const appliedFilters = action.filters;
      // filter the full meals array to get new array
      const updatedFilteredMeals = state.meals.filter(meal => {
        // if user choose gluten free then none gluten free will drop
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        return true
      })
      // every time should return new array 
       return{...state , filteredMeals: updatedFilteredMeals}
      

    default:
      return state;
  }
};

export default mealsReducer;
