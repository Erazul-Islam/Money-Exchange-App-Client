import React from 'react';

const Rate = () => {
    return (
        <div>
            <h1>Currency rate</h1>
            <div className='shadow-lg h-52 rounded-lg w-[100px]'>
                <h1 className='mt-4 pl-4'>USD: 1</h1>
                <h1 className='mt-4 pl-4'>EUR: 0.91</h1>
                <h1 className='mt-4 pl-4'>BDT: 109.5</h1>
                <h1 className='mt-4 pl-4'>JPY: 140,</h1>
            </div>
        </div>
    );
};

export default Rate;