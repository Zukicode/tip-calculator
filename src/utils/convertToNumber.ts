export const convertToNumber = (num: string) => {
	const newNumber = parseFloat(num);
	return newNumber.toFixed(2);
};
