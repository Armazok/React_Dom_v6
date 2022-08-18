import React from 'react';
import './App.css';
import {Introduction} from "./ReactRouterDom/01_Introduction/01_introduction";
import {Nesting} from "./ReactRouterDom/02_Nesting/02_nesting";
import {UseParams} from "./ReactRouterDom/03_useParams/03_useParams";
import {Link} from "./ReactRouterDom/04_Link/04_link";

function App() {
    return (
        <div className="App">
            {/*<Introduction/>*/}
            {/*<Nesting/>*/}
            {/*<UseParams/>*/}
            <Link/>
        </div>
    );
}

export default App;
