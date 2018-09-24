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

export const items = (state = {data: []}, action) => {
    switch (action.type) {
        case 'ADD_ITEMS': 
            return { ...state, data: action.data };
			
        default: return state;
    }
};

export const loader = (state = {show: false}, action) => {
    switch (action.type) {
        case 'SHOW_LOADER':
            return { ...state, show: true };
		case 'HIDE_LOADER':
            return { ...state, show: false };

        default: return state;
    }
};
