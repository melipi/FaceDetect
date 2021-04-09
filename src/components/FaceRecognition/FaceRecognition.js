import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
       <div className='container flex flex-column items-center border-box'>
           <div className='imgcontainer border-box'>
               <div className='imgviewer relative border-box'>
                    <img 
                        id='inputImage' 
                        alt='' 
                        src={imageUrl} 
                    />
                    <div className='bounding-box' 
                        style={{
                            top: box.topRow, 
                            right: box.rightCol, 
                            bottom: box.bottomRow, 
                            left: box.leftCol}}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;