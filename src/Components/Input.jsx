import React from 'react';

const Input = ({
    name,
    unit,
    readValue,
    setValue,
}) => {


    const handleChange = (e) => {
        if (!isNaN(Number(e.target.value))) {
            // if (e.target === document.activeElement) {
            //     setLocalValue(Number(e.target.value))
            // } else {
                setValue(Number(e.target.value))
            // }
        }
    }

    const handleClick = (type) => {
        switch (type) {
            case 'decrement':
                if (readValue > 0) {
                    setValue(readValue - 1)
                }
                break;
            case 'increment':
                setValue(readValue + 1)
                break;
            default:
        }
    }

    return (
        <div>
            <p>{name}</p>
            <input
                value={readValue}
                onChange={handleChange}
                // onBlur={handleChange}
            />
            {unit}
            <button onClick={() => handleClick('decrement')}>-</button>
            <button onClick={() => handleClick('increment')}>+</button>
        </div>
    )
}

export default Input;