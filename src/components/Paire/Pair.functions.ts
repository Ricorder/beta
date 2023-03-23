export const incomeDigit = (lp: number, b: number): number => 100 - (b * 100 / lp);

export const income = (lp: number, b: number): string => {
	const result: number = -incomeDigit(lp, b)
	if(result < 0) {
		return `+${result.toFixed(2)}%`
	} else if(result > 0) {
		return `-+${result.toFixed(2)}%`
	} else {
		return `  ${result.toFixed(2)}%`
	}
}

export const change = (n: string): string[] => {
	if(n.split('', 3).join('') === 'LCO') {
		return n.split('', 3).concat('KKK')
	} else {
		return n.split('', 6)
	}
}

export const bidOne = (b: string): string => {
	if(Number(b) < 10) {
		return `00${b}`
	} else if(100 > Number(b) && Number(b) > 10) {
		return `0${b}`
	} else {
		return b
	}
}

export const bidTwo = (b: string = ''): string => {
	const length: number = b.length
	if(length === 5) {
		return b
	} else if(length === 4) {
		return `${b}0`
	} else if(length === 3) {
		return `${b}00`
	} else if(length === 2) {
		return `${b}000`
	} else if(length === 1) {
		return `${b}0000`
	} else {
		return b
	}
}
