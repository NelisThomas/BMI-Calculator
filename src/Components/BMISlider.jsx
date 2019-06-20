import React from 'react';

import BMICategories from './BMICategories';

const BMISlider = ({
    readBMI,
    setBMI,
    active,
}) => {

    const maxRange = 75;
    const minRange = 0;

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

    return(
        <div>
            BMI: {readBMI || 0}
            <div>
                <button onClick={() => handleClick('decrement')}>-</button>
                <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    value={readBMI || minRange}
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