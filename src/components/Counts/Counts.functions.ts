export const count = (amount: string = '0'): string[] => {
	const price = Number(amount);
	
	const changeSymbol = (): string => {
		const stroke = (price / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		if (Number.isInteger((price / 100))) {
			return stroke.concat(',')
		} else {
			return stroke.replace('.', ',')
		}
	};
	return changeSymbol().split(',');
}
