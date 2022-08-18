import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

export const Nesting = () => {
    return (
        <div>
            {/* NavLink что бы могли переходить на соответствующие страницы */}
            <NavLink to={`/`}> main</NavLink>
            <NavLink to={`/login`}> login</NavLink>
            <NavLink to={`/profile`}> profile</NavLink>
            <NavLink to={`/profile/settings`}> settings</NavLink>


            {/* Группа страниц в elements компонента
                {`/*`} после слеша может быть что угодно

                 Что бы увидеть и profile и settings требуется вложенность
                 (   <Routes>
                        <Route path={`/settings`} element={<div> settings</div>}/>
                    </Routes> )
            */}
            <Routes>
                <Route path={`/*`} element={<div> 404</div>}/>
                <Route path={`/`} element={<div> main</div>}/>
                <Route path={`/login`} element={<div> login</div>}/>
                <Route path={`/profile/*`} element={(
                    <div>
                        profile
                        <Routes>
                            <Route path={`*`} element={<div> profile page not found</div>}/>
                            <Route path={`:id`} element={<div> id</div>}/>
                            <Route path={`/settings`} element={<div> settings</div>}/>
                        </Routes>
                    </div>
                )}/>
            </Routes>
        </div>
    );
};
