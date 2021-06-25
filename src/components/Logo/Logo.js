import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brainlogo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ml4 mt0' style={{height: 150, width: 150}}>   
            <Tilt className='Tilt br2 shadow-2' perspective={100}>
                <div className='Tilt-inner parallax-effect'>
                    <img alt='brain logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;