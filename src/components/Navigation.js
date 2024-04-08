



import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    
    return (
        <div className=' text-2xl  bg-yellow-100 flex justify-center gap-7'>
            <Link to={"home"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
        </div>
    );
};

export default Navigation;