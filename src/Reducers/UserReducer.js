import { UserType } from '../Actions/ActionType';

const initialState = {
  userInfo: false,
  currentLanguage: 'en',
};

const getUser = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { userInfo: action.payload });
  return newState;
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UserType.GET_USER: {
      return getUser(state, action);
    }
    default: {
      return state;
    }
  }
}