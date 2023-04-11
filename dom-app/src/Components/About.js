import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(){
    const Navigate = useNavigate();

    const handleclick = () => {
        Navigate('/');
    };

    return(
        <>
            <p>This is about page</p>
            <button onClick={handleclick}>Click Me</button>
        </>
    );
}

export default About;