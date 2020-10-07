// STEP 1: creat initial state and empty reducer

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
};

// set stae = initialState in the rediucer when it's being passed in as  a default value

export const carSalesReducer = (state = initialState, action) => {
    console.log("Redux is calling the reducer with state:", state, "and action:", action);
    switch (action.type) {
        //Future actions/cases:
        // add feature
        // remove feature
        //make sure the total additional price is ALWAY recalculated in those
        //STEP 3 - created dummy cases
        case "ADD_FEATURE":
            console.log("hitting add feature case");
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.includes(action.payload)
                        ? [state.car.features]
                        : [state.car.features, action.payload]
                },
                additionalPrice: (state.additionalPrice += action.payload.price)
            }
        case "REMOVE_FEATURE":
            console.log("hitting remove feature case");
            return state
        default:
            return state;
    }
}