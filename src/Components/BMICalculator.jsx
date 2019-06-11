import React, {useState, useEffect} from 'react';

import Input from './Input';
import BMISlider from './BMISlider';

const BMICalculator = () => {
    // const [readHeight, setHeight] = useState(0);
    // const [readWeight, setWeight] = useState(0);
    // const [readBMI, setBMI] = useState(0);

    const [state, setState] = useState({
        height: 0,
        weight: 0,
        bmi: 0,
    })

    const calcBMI = (height, weight,whoDis) => {
        console.log(whoDis);
        const heightInMeters = height / 100;
        console.log('height:',height);
        console.log('weight:',weight);
        return (weight / (heightInMeters * heightInMeters));
    }

    const calcWeight = (height, bmi, whoDis) => {
        console.log(whoDis);
        const heightInMeters = height / 100;
        console.log('setting weight:',((heightInMeters * heightInMeters) * bmi));
        return ((heightInMeters * heightInMeters) * bmi)
    }

    // useEffect(() => {
    //     setBMI(calcBMI(readHeight, readWeight));
    // }, [readHeight, readWeight]);

    // useEffect(() => {
    //     setWeight(calcWeight(readHeight, readBMI));
    // }, [readBMI, readHeight])

    const handleHeightChange = (height) => {
        console.log('handleHeightChange');
        setState({
            ...state,
            height: height,
            bmi: calcBMI(height, state.weight,'handleHeightChange')
        })
    }

    const handleWeightChange = (weight) => {

        console.log('handleWeightChange');
        setState({
            ...state,
            weight: weight,
            bmi: calcBMI(state.height, weight, 'handleWeightChange')
        })
    }

    const handleBMIChange = (bmi) => {
        console.log('handleBMIChange');
        setState({
            ...state,
            weight: calcWeight(state.height, bmi,'handleBMIChange'),
            bmi: bmi
        })
    }

    return(
        <div>
            <h3>Calculate your BMI:</h3>
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
                active={state.height && state.weight}
            />
        </div>
    )
}

export default BMICalculator;