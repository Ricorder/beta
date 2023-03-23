export function transform(date: string) {
	console.log('date', date.slice(0, 10).replace('-', '.'));
	
	return (
		date
			.slice(0, 10)
			.replace('-', '.')
			.replace('-', '.')
			.replace(/(....)(.)(..)(.)(..)/, '$5$2$3$4$1')
	)
}
