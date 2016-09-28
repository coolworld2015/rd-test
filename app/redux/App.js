import React from 'react';
import Sidebar from './Sidebar';

const App = ({children}) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
};

export default App;
