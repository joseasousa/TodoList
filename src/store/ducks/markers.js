
export const Types = {
  ADD_REQUEST: 'markers/ADD_REQUEST',
  ADD_SUCCESS: 'markers/ADD_SUCCESS',
  ADD_FAILURE: 'markers/ADD_FAILURE',
};

const initialState = {
  mapMarkers: [],
  loading: false,
  errorOnAdd: null,
  loaded: false,
};

export default function markers(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        mapMarkers: [
          ...state.mapMarkers,
          action.payload.mapMarkers,
        ],
        errorOnAdd: null,
        loading: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  addMarkerRequest: marker => ({
    type: Types.ADD_REQUEST,
    payload: {
      marker,
    },
  }),

  addMarkerSuccess: mapMarkers => ({
    type: Types.ADD_SUCCESS,
    payload: {
      mapMarkers,
    },
  }),

  addMarkerError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
