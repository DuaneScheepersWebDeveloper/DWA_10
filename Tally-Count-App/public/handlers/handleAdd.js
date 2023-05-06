import { number, addButton, subtractButton, STEP_AMOUNT, MAX_NUMBER, } from '../utils/elements.js';
const handleAdd = (event) => {
    console.log('Clicked on the adding button');
    const newValue = Number(number.value) + STEP_AMOUNT;
    number.value = newValue.toString();
    if (subtractButton.disabled === true) {
        subtractButton.disabled = false;
    }
    if (newValue >= MAX_NUMBER) {
        addButton.disabled = true;
        // subtractButton.disabled = false;
    }
    console.log(typeof Number(number.value));
};
export default handleAdd;
