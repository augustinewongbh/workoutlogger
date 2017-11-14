/*
state tree =>
program : {
id: "",
title: "",
workoutsId: ["array of ids"]
}

*/

const initialState = [];

export default function programs(state = initialState, action) {
  switch (action.type) {
    case "ADD_PROGRAM":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          workoutsId: []
        }
      ];
    // case "ADD_WORKOUT":
    //   return state.map(
    //     program =>
    //       program.id === action.programId
    //         ? {
    //             ...program,
    //             workoutsId: [...program.workoutsId, action.workoutId]
    //           }
    //         : program
    //   );

    default:
      return state;
  }
}
