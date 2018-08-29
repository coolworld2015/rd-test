export const addDeck = (name) => ({type: 'ADD_DECK', name: name, description: 'xxx'});
export const addItems = (data) => ({type: 'ADD_ITEMS', data});
export const showLoader = () => ({type: 'SHOW_LOADER'});
export const hideLoader = () => ({type: 'HIDE_LOADER'});