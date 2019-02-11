export const Types = {
  SIGNOUT_REQUEST: 'signout/GET_REQUEST',
  SIGNOUT_SUCCESS: 'signout/GET_SUCCESS',

  SIGNIN_REQUEST: 'signin/GET_REQUEST',
  SIGNIN_SUCCESS: 'signin/GET_SUCCESS',
  SIGNIN_FAILURE: 'signin/GET_FAILURE',

  CREATE_PROFILE_REQUEST: 'createProfile/GET_REQUEST',
  CREATE_PROFILE_SUCCESS: 'createProfile/GET_SUCCESS'
}

const initialState = {
  isAuthing: false,
  isAuth: false,
  issAsigningin: false,
  error: false,
  errorMessage: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGNOUT_REQUEST:
      return {
        ...state,
        issAsigningin: false,
        error: false,
        errorMessage: ''
      }

    case Types.SIGNOUT_SUCCESS:
      return {
        ...state,
        issAsigningin: false,
        error: false,
        isAuth: false
      }

    case Types.SIGNIN_REQUEST:
      return {
        ...state,
        passWord: action.payload.passWord,
        issAsigningin: true,
        error: false,
        errorMessage: ''
      }
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        issAsigningin: false,
        isAuth: true,
        error: false,
        errorMessage: ''
      }
    case Types.SIGNIN_FAILURE:
      return {
        ...state,
        issAsigningin: true,
        error: true,
        isAuth: false,
        errorMessage: action.payload.error
      }

    case Types.CREATE_PROFILE_REQUEST:
      return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: '',
        saved: false
      }

    case Types.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        saved: true
      }

    case Types.CREATE_PROFILE_FAILURE:
      return {
        ...state,
        isSaving: false,
        errorMessage: action.payload.error,
        saved: false
      }

    default:
      return state
  }
}

export default auth

export const Creators = {
  signinRequest: passwd => ({
    type: Types.SIGNIN_REQUEST,
    payload: {
      passwd
    }
  }),
  signinSuccess: () => ({
    type: Types.SIGNIN_SUCCESS
  }),
  signinFailure: error => ({
    type: Types.SIGNIN_FAILURE,
    payload: {
      error
    }
  }),

  signoutRequest: () => ({
    type: Types.SIGNOUT_REQUEST
  }),

  signoutSuccess: () => ({
    type: Types.SIGNOUT_SUCCESS
  }),

  createProfileRequest: passwd => ({
    type: Types.CREATE_PROFILE_REQUEST,
    payload: {
      passwd
    }
  }),
  createProfileSuccess: () => ({
    type: Types.CREATE_PROFILE_SUCCESS
  }),
  createProfileFailure: error => ({
    type: Types.CREATE_PROFILE_FAILURE,
    payload: {
      error
    }
  })
}
