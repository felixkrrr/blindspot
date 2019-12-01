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

const adjectiveReducer = (state = initState, action) => {
  switch (action.type) {
    case "DESELECT_ADJECTIVE":
      let newSelectedAdjectives = state.selectedAdjectives.filter(adjective => {
        return action.adjective !== adjective;
      });
      return {
        ...state,
        selectedAdjectives: newSelectedAdjectives
      };

    case "SELECT_ADJECTIVE":
      let newSelectedAdjectives1 = [
        ...state.selectedAdjectives,
        action.adjective
      ];

      return {
        ...state,
        selectedAdjectives: newSelectedAdjectives1
      };
    default:
      return state;
  }
};

export default adjectiveReducer;
