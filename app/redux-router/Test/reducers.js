export const decks = (state, action) => {
    switch (action.type) {
        case 'ADD_DECK':
            let newDeck = {
                id: +new Date,
                name: action.name,
                description: action.description
            };
            return state.concat([newDeck]);

        default: return state || [];
    }
};

export const items = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let newItems = Object.assign({}, action.data);
            return newItems;

        default: return state || {};
    }
};
