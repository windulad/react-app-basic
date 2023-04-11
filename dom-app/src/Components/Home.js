import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const Navigate = useNavigate();

    const handleclick = () => {
        Navigate('/About');
    };

    return(
        <>
            <p>This is home page</p>
            <button onClick={handleclick}>Click Me</button>
        </>
    );
}

export default Home;