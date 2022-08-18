import React from 'react';
import {NavLink, Route, Routes, useParams} from "react-router-dom";


const Profile = () => {
    /*const params = useParams<`id`>()*/
    /*const params = useParams<`id` | `vid`>()*/
    const params = useParams<`*`>()

    const some = params["*"]

    console.log(some)

    return <div>profile</div>
}


export const UseParams = () => {
    return (
        <div>
            <NavLink to={`/`}> main</NavLink>
            <NavLink to={`/login`}> login</NavLink>
            <NavLink to={`/profile`}> profile</NavLink>
            <NavLink to={`/profile/1`}> profile/1</NavLink>


            <Routes>
                <Route path={`/*`} element={<div> 404</div>}/>
                <Route path={`/`} element={<div> main</div>}/>
                <Route path={`/login`} element={<div> login</div>}/>
                <Route path={`/profile/*`} element={<Profile/>}/>
            </Routes>

        </div>
    );
};