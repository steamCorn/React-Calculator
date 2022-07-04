function calculateResult(a, b, mathOperand) {
    let A = Number(a);
    let B = Number(b);
    let total = 0;
    switch (mathOperand) {
        case '+':
            total = A + B;
            break;
        case '-':
            total = A - B;
            break;
        case '×':
            total = A * B;
            break;
        case '÷':
            total = A / B;
            break;
        default:
            total = B;
    }
    return total;
}

export { calculateResult };
