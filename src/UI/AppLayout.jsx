import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';
import Navbar from './Navbar';
import ITNavBar from './ITNavBar';
import AdminNavBar from './AdminNavBar';



const AppLayout = () => {
    const navigate = useNavigation();
    const isLoading = navigate.state === "loading";
    console.log(navigate);
    return (
        <>
            <AdminNavBar />
            {isLoading && <Loader />}
            <Outlet />
        </>
    )
}

export default AppLayout