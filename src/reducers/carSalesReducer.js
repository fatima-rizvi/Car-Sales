// STEP 1: creat initial state and empty reducer

const initialState = {
    additionalPrice: 0,
    car: {
        features: []
    }
};

// set stae = initialState in the rediucer when it's being passed in as  a default value

export const carSalesReducer = (state = initialState, action) => {
    console.log("Redux is calling the reducer with state:", state, "and action:", action);
    switch (action.type) {
        //Future actions/cases:
        // add feature
        // remove feature
        //make sure the total additional price is ALWAY recalculated in those
        default:
            return state;
    }
}