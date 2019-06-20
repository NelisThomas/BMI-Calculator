import React, {useState} from 'react';

import Input from './Input';
import BMISlider from './BMISlider';

const BMICalculator = () => {

    const [state, setState] = useState({
        height: 0,
        weight: 0,
        bmi: 0,
        age:0,
        gender: 'M'
    })
    const [isChild, setIsChild] = useState(false);

    const calcBMI = (height, weight) => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters));
    }

    const calcWeight = (height, bmi) => {
        const heightInMeters = height / 100;
        return ((heightInMeters * heightInMeters) * bmi)
    }

    const handleHeightChange = (height) => {
        setState({
            ...state,
            height: height,
            bmi: calcBMI(height, state.weight)
        })
    }

    const handleWeightChange = (weight) => {
        setState({
            ...state,
            weight: weight,
            bmi: calcBMI(state.height, weight)
        })
    }

    const handleBMIChange = (bmi) => {
        setState({
            ...state,
            weight: calcWeight(state.height, bmi),
            bmi: bmi
        })
    }

    const handleAgeChange = (age) => {
        setState({
            ...state,
            age: age
        })
    }

    const handleGenderChange = (e) => {
        setState({
            ...state,
            gender: e.target.value
        })
    }

    return(
        <div>
            <h3>Calculate your BMI:</h3>
            <button onClick={() => setIsChild(false)}>Adult</button>
            <button onClick={() => setIsChild(true)}>Child</button>
            {isChild && (
                <form>
                    <label>
                        <input
                            type='radio'
                            value='male'
                            checked={state.gender === 'male'}
                            onChange={handleGenderChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type='radio'
                            value='female'
                            checked={state.gender === 'female'}
                            onChange={handleGenderChange}
                        />
                        Female
                    </label>
                </form>
            )}
            {isChild && (
                <Input
                    name="Age"
                    unit="years"
                    setValue={handleAgeChange}
                    readValue={state.age}
                />
            )}
            <Input
                name="Height"
                unit="cm"
                setValue={handleHeightChange}
                readValue={state.height}
            />
            <Input
                name="Weight"
                unit="kg"
                setValue={handleWeightChange}
                readValue={state.weight}
            />
            <BMISlider
                setBMI={handleBMIChange}
                readBMI={state.bmi}
                active={state.height > 0 && state.weight > 0}
            />
        </div>
    )
}

export default BMICalculator;