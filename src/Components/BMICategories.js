const BMICategories = (BMI) => {
    if (BMI < 15) {
        return "Very severely underweight"
    } else if (BMI >= 15 && BMI < 16) {
        return "Severely underweight"
    } else if (BMI >= 16 && BMI < 18.5) {
        return "Underweight"
    } else if (BMI >= 18.5 && BMI < 25) {
        return "Normal (healthy weight)"
    } else if (BMI >= 25 && BMI < 30) {
        return "Overweight"
    } else if (BMI >= 30 && BMI < 35) {
        return "Obese Class I (Moderately obese)"
    } else if (BMI >= 35 && BMI < 40) {
        return "Obese Class II (Severely obese)"
    } else if (BMI >= 40 && BMI < 45) {
        return "Obese Class III (Very severely obese)"
    } else if (BMI >= 45 && BMI < 50) {
        return "Obese Class IV (Morbidly Obese)"
    } else if (BMI >= 50 && BMI < 60) {
        return "Obese Class V (Super Obese)"
    } else if (BMI >= 60) {
        return "Obese Class VI (Hyper Obese)"
    }
}

export default BMICategories