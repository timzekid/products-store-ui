const DEFAULT_STATE = {
    productsList: []
};

export default function products(state = DEFAULT_STATE, action) {
    console.log('action', action);
    switch (action.type) {
        default:
            return state;
    }
}
