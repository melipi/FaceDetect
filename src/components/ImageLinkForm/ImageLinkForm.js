import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
       <React.Fragment>
       <div className='flex flex-column items-center sans-serif pt3'>
           <p className='f6 fw9 black-80'>
               {'Paste an image URL below to see if the app detects a human face!'}
           </p>
           <div className='tc mw-100 flex flex-auto'>
               <div className='form pa3 content-end'>
                <input 
                    className='f5 pa2 w-70' 
                    type='text' 
                    onChange={onInputChange}/>
                <button 
                    className='w-30 b ph3 pv2 input-reset ba bw1 b--transparent bg-transparent bg-blue shadow-hover white pointer f5 dib'
                    onClick={onButtonSubmit}
                    >Detect</button>
               </div>
            </div>
       </div>
       </React.Fragment>
    );
}

export default ImageLinkForm;