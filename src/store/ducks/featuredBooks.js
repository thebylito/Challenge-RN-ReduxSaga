import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'featuredBooks/GET_REQUEST',
  GET_SUCCESS: 'featuredBooks/GET_SUCCESS',
  GET_FAILURE: 'featuredBooks/GET_FAILURE',
};

const initialState = Immutable({
  data: null,
  loading: false,
  error: null,
});

export default function featuredBooks(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getFeaturedBooksRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getFeaturedBooksSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getFeaturedBooksFailure: (error) => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),
};
