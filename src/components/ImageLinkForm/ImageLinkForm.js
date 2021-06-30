import React from 'react';
import'./ImageLinkForm.css';

//code a keypress event for enter after inputting URL
const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3 black' style={{fontWeight:'bold'}}>
                {'Smart Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5' style={{background: 'linear-gradient(89deg, rgba(50,155,158,1) 0%, rgba(41,62,105,1) 100%)'}}>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='enter image URL' onChange={onInputChange}/>
                    <button id='detect' 
                    className='w-30 grow f4 link ph3 pv2 dib white' 
                    style={{background: 'rgba(50,155,158,1)'}} 
                    onClick={onPictureSubmit}
                    >Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;