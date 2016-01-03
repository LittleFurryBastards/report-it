"use strict";

import ACTION_TYPES from '../actions/types.jsx';

const actions = {
  addCategory: (payload, error, meta) => {
    if (!payload) {
      throw new Error('REDUX Actions: action payload is mandatory.');
    }

    return {
      type: ACTION_TYPES.ADD_CATEGORY,
      payload,
      error,
      meta
    };
  }
};

export default actions;
