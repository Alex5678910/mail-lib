import React from 'react';

const Calculator = () => {

  const state = ['4 346', '34 831', '12 163']
    const sum = state.reduce((accumulator, currentValue) => {
        const item = currentValue.toString().replace(/\s/g, '')
       return  accumulator + +item
    }, 0)

    return (
        <div>
            {sum * 89/100}
        </div>
    );
};

export default Calculator;