function calculateResult(A, B, mathOperand) {
	let total = 0;
	switch (mathOperand) {
		case '+':
			total = A + B;
			break;
		case '-':
			total = A - B;
			break;
		case '*':
			total = A * B;
			break;
		case '/':
			total = A / B;
			break;
		default:
			total = B;
	}
	return total;
}

export default calculateResult;
