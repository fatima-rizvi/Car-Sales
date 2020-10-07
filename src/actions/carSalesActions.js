//add feature action
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (newFeature) => {
  console.log("new feature", newFeature);
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};

//delete feature action

export const DELETE_FEATURE = "DELETE_FEATURE";

export const deleteFeature = (feature) => {
    console.log("Feature being deleted", feature)
    return {
        type: DELETE_FEATURE,
        payload: feature
    };
}