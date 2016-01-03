'use strict';

const initialState = {
  categories: [
    'Huskey',
    'Richback',
    'Labrador',
    'Corgie',
    'Mastiff'
  ]
};

export default (previousState = initialState, action) => {
  switch (action.type) {
  case 'ADD_CATEGORY':
    return Object.assign({}, previousState, {
      categories: [
        ...previousState.categories,
        action.category
      ]});
  default:
    return previousState;
  }
};
