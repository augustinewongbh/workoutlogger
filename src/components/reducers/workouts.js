/*
state = {
  workoutId: {
    id: workoutId,
    title: "",
    days: ["mon","tues"...],
    exercisesId: [exerciseId1, exerciseId2]
  }
}


*/

const initialState = {};

export default function exercises(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORKOUT": {
      const workout = {
        id: action.workoutId,
        title: action.title,
        days: action.days,
        exercisesId: []
      };
      return {
        ...state,
        [action.workoutId]: workout
      };
    }
    case "ADD_EXERCISE": {
      const workout = state[action.workoutId];
      return {
        ...state,
        [action.workoutId]: {
          ...workout,
          exercisesId: workout.exercisesId.concat(action.exerciseId)
        }
      };
    }
    default:
      return state;
  }
}
