import React from 'react';

const Entry = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3' style={{fontWeight:'bold'}}>
                {'${name}, your current entry count is...'}
            </div>
            <div className='white f1' style={{fontWeight:'bold'}}>
                {entries}
            </div>
        </div>
    );
}


export default Entry;