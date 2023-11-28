const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const suggestionsRecipesReducers = (state = initialState, action) => {
  if (action.type === 'GET_SUGGESTIONS_RECIPES_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'GET_SUGGESTIONS_RECIPES_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      data: action.payload,
    };
  } else if (action.type === 'GET_SUGGESTIONS_RECIPES_ERROR') {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: true,
      errorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default suggestionsRecipesReducers;
