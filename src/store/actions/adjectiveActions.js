export const selectAdjectives = adjective => {
  return (dispatch, getState, { getFirebas, getFirestore }) => {
    //asynchronous call
    dispatch({ type: "SELECT_ADJECTIVE", adjective });
  };
};

export const deSelectAdjectives = adjective => {
  return (dispatch, getState) => {
    //asynchronous call
    dispatch({ type: "DESELECT_ADJECTIVE", adjective });
  };
};
