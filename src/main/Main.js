

import { Outlet } from "react-router-dom"

import React from 'react';
import Navigation from '../components/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;