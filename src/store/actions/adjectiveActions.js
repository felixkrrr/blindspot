export const selectAdjectives = adjective => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const updateBaseAdjectives = adjectives => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("baseAdjectives")
      .doc("baseAdjectives")
      .set({
        adjectives
      })
      .then(() => {
        dispatch({ type: "UPDATE_BASE_ADJECTIVES_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_BASE_ADJECTIVES_ERROR", err });
      });
  };

  /* 
  To use place following code in any mapDispatchToProps:
  updateBaseAdjectives: adjectives =>
      dispatch(updateBaseAdjectives(adjectives))

  import this in same file: 
  import { updateBaseAdjectives } from "../../store/actions/adjectiveActions";
  */
};
