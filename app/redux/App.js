import React from 'react';
import Sidebar from './Sidebar';

const App = (props) => {
    return (
        <div>
            <Sidebar decks={[{name:"test"}]} addingDeck="true"/>
        </div>
    )
};

export default App;
