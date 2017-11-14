/*
exercises {
exerciseId : {
title: "",
id: exerciseId,
sets: int,
reps: int,

}
}


*/

const initialState = {};

export default function exercises(state = initialState, action) {
  switch (action.type) {
    case "ADD_EXERCISE":
      const { exerciseId, title, reps, sets } = action;
      const exercise = {
        id: exerciseId,
        title,
        reps,
        sets,
        log: {}
      };
      return {
        ...state,
        [exerciseId]: exercise
      };
    default:
      return state;
  }
}
