import React from 'react';
import './App.css';
import {Introduction} from "./ReactRouterDom/01_Introduction/01_introduction";
import {Nesting} from "./ReactRouterDom/02_Nesting/02_nesting";

function App() {
    return (
        <div className="App">
            {/*<Introduction/>*/}
            <Nesting/>
        </div>
    );
}

export default App;
