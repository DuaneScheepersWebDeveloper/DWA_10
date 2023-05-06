import {
  number,
  addButton,
  subtractButton,
  STEP_AMOUNT,
  MIN_NUMBER,
} from '../utils/elements.js';

const handleSubtract = (event: MouseEvent) => {
  console.log('Clicked on the Subtract button ');

  const newValue = Number(number.value) - STEP_AMOUNT;
  number.value = newValue.toString();

  if (addButton.disabled === true) {
    addButton.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtractButton.disabled = true;
    // addButton.disabled = false;
  }

  console.log(typeof Number(number.value));
};
export default handleSubtract;
