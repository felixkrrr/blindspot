import baseAdjectives from "../const/adjectives";

const initState = {
  baseAdjectives,
  selectedAdjectives: ["able", "clever"],
  selectedByOthers: [
    { adjective: "able", count: 2 },
    { adjective: "accepting", count: 3 },
    { adjective: "adaptable", count: 0 },
    { adjective: "logical", count: 0 }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DESELECT_ADJECTIVE") {
    let newSelectedAdjectives = state.selectedAdjectives.filter(adjective => {
      return action.adjective !== adjective;
    });
    return {
      ...state,
      selectedAdjectives: newSelectedAdjectives
    };
  }

  if (action.type === "SELECT_ADJECTIVE") {
    let newSelectedAdjectives = [...state.selectedAdjectives, action.adjective];

    return {
      ...state,
      selectedAdjectives: newSelectedAdjectives
    };
  }

  return state;
};

export default rootReducer;
