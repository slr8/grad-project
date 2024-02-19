import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';



const AppLayout = () => {
    const navigate = useNavigation();
    const isLoading = navigate.state === "loading";
    console.log(navigate);
    return (
        <>
            {isLoading && <Loader />}
            <Outlet />
        </>
    )
}

export default AppLayout