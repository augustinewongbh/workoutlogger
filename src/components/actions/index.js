/*
BoilerPlates
// redux action creator
export const addTodo = (text) => {
return {
type: "ADD_TODO",
text
  }
}

// thunk functions //can chain actions
export const someFunction = (a) => {
 return (dispatch,getState)=> {
  dispatch({
  type:"ACTION",
  a,
  b,
  c
})
}
}

function makeASandwichWithSecretSauce(forPerson) {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

*/

export const addProgram = title => {
  return {
    type: "ADD_PROGRAM",
    title,
    id: "program" + Date.now()
  };
};

export const addWorkout = (title, days) => {
  return {
    type: "ADD_WORKOUT",
    //programId: programId,
    workoutId: "workout" + Date.now(),
    title,
    days
  };
};

export const addExercise = (workoutId, title, reps, sets) => {
  return {
    type: "ADD_EXERCISE",
    workoutId,
    title,
    reps,
    sets,
    exerciseId: "exercise" + Date.now()
  };
};

export const addWorkoutForm = (title, days, exercises) => {
  return (dispatch, getState) => {
    new Promise((resolve, reject) =>
      resolve(dispatch(addWorkout(title, days)))
    ).then(() => {
      const keys = Object.keys(getState().workouts);
      const workoutId = keys.slice(keys.length - 1);
      console.log(workoutId);
      for (let item of exercises) {
        dispatch(addExercise(workoutId, item.title, item.reps, item.sets));
      }
    });
  };
};
