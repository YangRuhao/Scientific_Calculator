const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');

let expression = ''; // Tracks the current expression

actions.addEventListener('click', (e) => {
    const value = e.target.dataset['value'];
    if (!value) return; // Ignore clicks outside buttons

    if (value === 'ce') {
        expression = '';
        ans.value = '';
    } else if (value === 'x^2') {
        expression = `(${expression})**2`;
    } else if (value === 'radic') {
        expression = `Math.sqrt(${expression})`;
    } else if (value === 'log') {
        expression = `Math.log10(${expression})`;
    } else if (value === 'ln') {
        expression = `Math.log(${expression})`;
    } else if (value === 'sin') {
        expression = `Math.sin(${expression})`;
    } else if (value === 'cos') {
        expression = `Math.cos(${expression})`;
    } else if (value === 'tan') {
        expression = `Math.tan(${expression})`;
    } else if (value === '=') {
        try {
            expression = eval(expression);
        } catch (error) {
            expression = 'Error';
        }
    } else {
        expression += value;
    }

    ans.value = expression;
});
