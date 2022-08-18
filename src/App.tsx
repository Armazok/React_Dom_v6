import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={`/`}> main</NavLink>
            <NavLink to={`/login`}> login</NavLink>
            <NavLink to={`/profile`}> profile</NavLink>
            <NavLink to={`/profile/settings`}> settings</NavLink>

            <Routes>
                <Route path={`/*`} element={<div> error 404</div>}/>
                <Route path={`/`} element={<div> main</div>}/>
                <Route path={`/login`} element={<div> login</div>}/>
                    <Route path={`/profile/*`} element={(
                    <div>
                        profile


                        <Routes>
                            <Route path={`settings`} element={<div>   settings</div>}/>
                            <Route path={`heightSettings`} element={<div>    ultra settings</div>}/>
                        </Routes>
                    </div>
                )}/>

   {/*             <Route path={`/profile`} element={(
                    <div>
                        login


                        <Outlet/>
                    </div>)}>

                    <Route path={`settings`} element={<div> settings</div>}/>
                    <Route path={`heightSettings`} element={<div> heightSettings</div>}/>

                </Route>*/}

            </Routes>
        </div>
    );
}

export default App;
