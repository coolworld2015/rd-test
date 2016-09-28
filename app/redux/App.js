import React from 'react';
import Sidebar from './Sidebar';

const App = (props) => {
    return (
        <div>
            {props.children}
            <Sidebar />
        </div>
    )
};

export default App;
