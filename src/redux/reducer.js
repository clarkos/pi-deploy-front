import { filterByDiet, filterByOrigin } from "../utils/Filters";
import { sortName, sortScore } from "../utils/Sorters";
import {
  GET_DETAILS,
  GET_RECIPES,
  GET_TYPES,
  PAGE_REFERENCE,
  SET_LOADING,
  SET_REFERENCE,
  SORT_NAME,
  SORT_SCORE,
  FILTER_DIET,
  FILTER_ORIGIN,
  CLEAR_FILTERS,
  POST_RECIPE,
} from "./actions";

let initialState = {
  recipesLoaded: [],
  recipesUnfiltered: [],
  recipeDetails: {},
  dietsLoaded: [],
  loading: false,
  reference: "",
  pageReference: 1,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_RECIPES:
      return {
        ...state,
        recipesLoaded: action.payload,
        recipesUnfiltered: action.payload,
        loading: false,
      };
    
    case GET_DETAILS:
      return {
        ...state,
        recipeDetails: action.payload,
        loading: false,
      };
    
    case GET_TYPES:
      return {
        ...state,
        dietsLoaded: sortName(-1, action.payload),
      };
    
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case SET_REFERENCE:
      return {
        ...state,
        reference: action.payload,
      };
    
    case PAGE_REFERENCE:
      return {
        ...state,
        pageReference: action.payload,
      };

    case SORT_NAME:
      return {
        ...state,
        recipesLoaded: sortName(action.payload, state.recipesLoaded),
        pageReference: 1,
      };

    case SORT_SCORE:
      return {
        ...state,
        recipesLoaded: sortScore(action.payload, state.recipesLoaded),
        pageReference: 1,
      };

    case FILTER_DIET:
      return {
        ...state,
        recipesLoaded: filterByDiet(action.payload, state.recipesLoaded),
        pageReference: 1,
      };
    
    case FILTER_ORIGIN:
      return {
        ...state,
        recipesLoaded: filterByOrigin(action.payload, state.recipesLoaded),
        pageReference: 1,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        recipesLoaded: state.recipesUnfiltered,
      };

    case POST_RECIPE:
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
