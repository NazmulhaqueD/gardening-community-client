import React from 'react';

const Loader = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loader;