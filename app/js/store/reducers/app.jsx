'use strict';

import ACTION_TYPES from '../actions/types.jsx';

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
  case ACTION_TYPES.ADD_CATEGORY:
    return Object.assign({}, previousState, {
      categories: [
        ...previousState.categories,
        action.payload
      ]});
  default:
    return previousState;
  }
};
