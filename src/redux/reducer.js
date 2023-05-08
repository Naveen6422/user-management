import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
        return {
            ...state,
            users: action.payload,
            loading: false,
        };
    case types.DELETE_USER:
        return {
            ...state,
            user: state.user.filter((user) => user.id !== action.payload),
            loading: false,

        };
    case types.ADD_USER:
        return {
            ...state,
            user: [...state.user, action.payload],
            loading: false,
        };
    case types.UPDATE_USER:
        return {
            ...state,
            user: state.user.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return user;
                }
            }),
           

        };
        default:
            return state;
    }




    
};

export default userReducer;
