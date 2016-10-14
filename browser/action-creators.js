import React from 'react';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  };
};
