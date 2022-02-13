import {
  ADD_USER,
  ADD_DETAILS,
  ADD_SKILLS,
  LOGIN,
} from '../assets/utils/type';

const Reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { ...payload }],
      };
    case LOGIN:
      return {
        ...state,
        login: { ...payload },
      };
    case ADD_DETAILS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id == payload.id
            ? {
                ...user,
                country: payload.country,
                city: payload.city,
                description: payload.description,
              }
            : user
        ),
      };
    case ADD_SKILLS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id == payload.id
            ? {
                ...user,
                experience: payload.experience,
                profile: payload.profile,
                skill: payload.skill,
              }
            : user
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
