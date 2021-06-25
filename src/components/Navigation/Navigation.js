import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
// maybe add an edit profile option to edit user info or delete altogether
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signedout')} className='f3 link dim black underline pa3 pointer' style={{color: 'rgba(41,62,105,1)'}}>Sign Out</p>  
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signedout')} className='f3 link dim black underline pa3 pointer' style={{color: 'rgba(41,62,105,1)'}}>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer' style={{color: 'rgba(41,62,105,1)'}}>Register</p>
            </nav>
        );
    }
}

export default Navigation;