export const count = (price: number, simbol: string): string[] => {
	let changeSymbol: string = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',');
	if (simbol === 'RUB') {
		return (changeSymbol.concat(' ₽')).split(',');
	}
	if (simbol === 'EUR') {
		return changeSymbol.concat(' €').split(',');
	}
	if (simbol === 'USD') {
		return changeSymbol.concat(' $').split(',');
	}
}
