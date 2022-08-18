import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

export const Introduction = () => {
    return (
        <div>
            {/* NavLink что бы могли переходить на соответствующие страницы */}
            <NavLink to={`/`}> main</NavLink>
            <NavLink to={`/login`}> login</NavLink>
            <NavLink to={`/profile`}> profile</NavLink>



             {/* Группа страниц в elements компонента */}
            <Routes>
                <Route path={`/`} element={<div> main</div>}/>
                <Route path={`/login`} element={<div> login</div>}/>
                <Route path={`/profile`} element={<div> profile</div>}/>
            </Routes>

        </div>
    );
};
