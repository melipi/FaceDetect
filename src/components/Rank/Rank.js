import React from 'react';

const plural = (count, word) => {
    const suffix = `s`;
    const number = Number(count);

    return number !== 1 
        ? number + ` ` + word + suffix
        : number + ` ` + word
};

const Rank = ({ name, entries }) => {
    return (
        <React.Fragment>
            <section className='flex flex-column justify-center items-center sans-serif pa3'>
            <p className='f6 ttu tracked gray'>
                {`${name}, you have submitted ${plural(entries, 'image')} for detection.`}    
            </p>
            </section>
        </React.Fragment>
    );
}

export default Rank;