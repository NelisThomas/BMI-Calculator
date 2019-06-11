import React from 'react';

import BMICategories from './BMICategories';

const BMISlider = ({
    readBMI,
    setBMI,
    active,
}) => {

    const maxRange = 50;
    const minRange = 15;

    const handleChange = (e) => {
        setBMI(Number(e.target.value))
    }

    const handleClick = (type) => {
        if (readBMI > minRange && readBMI < maxRange) {
            switch (type) {
                case 'increment':
                    setBMI(Math.round(readBMI) + 1);
                    break;
                case 'decrement':
                    setBMI(Math.round(readBMI) - 1);
                    break;
                default:
            }
        }
    }

    console.log('BMI:',readBMI);

    return(
        <div>
            BMI: {readBMI}
            <div>
                <button onClick={() => handleClick('decrement')}>-</button>
                <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    value={readBMI}
                    onChange={handleChange}
                    disabled={!active}
                />
                <button onClick={() => handleClick('increment')}>+</button>
            </div>
            {active && BMICategories(readBMI)}
        </div>
    )
}

export default BMISlider;