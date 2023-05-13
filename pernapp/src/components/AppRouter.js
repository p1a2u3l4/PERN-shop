import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Context } from '..';
import { privateRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context);
    const {gadget} = useContext(Context);
    // console.log(user);
    console.log(gadget);
    return(
        <Routes>
            {user.isAuth && privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/> )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/> )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE}/>}/>
        </Routes>
        )
}

export default AppRouter;