'use strict';

/* eslint new-cap: 0 */

import ACTION_TYPES from '../actions/types.jsx';
import {Map, List} from 'immutable';

const initialState = Map({
  categories: List.of(
    'Huskey',
    'Richback',
    'Labrador',
    'Corgie',
    'Mastiff'
  )
});

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPES.ADD_CATEGORY:
    const categories = state.get('categories');

    return state.set('categories', categories.push(action.payload));
  default:
    return state;
  }
};
