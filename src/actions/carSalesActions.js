//add feature action
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (newFeature) => {
  console.log(newFeature);
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};