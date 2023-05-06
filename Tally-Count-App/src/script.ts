import { addButton, subtractButton, resetButton } from './utils/elements.js';
import handleSubtract from './handlers/handleSubtract.js';
import handleAdd from './handlers/handleAdd.js';
import resetHandler from './handlers/resetHandler.js';

resetButton.addEventListener('click', resetHandler);
addButton.addEventListener('click', handleAdd);
subtractButton.addEventListener('click', handleSubtract);
