import { number, defaultValue } from '../utils/elements.js';

const resetHandler = (event: MouseEvent) => {
  console.log('Reset button was clicked');

  let newValue = Number(number.value);
  newValue = defaultValue;
  number.value = newValue.toString();
};
export default resetHandler;
