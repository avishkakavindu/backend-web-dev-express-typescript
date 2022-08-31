export class MathUtil {
	public static printMathTable(value: number): string {
		let tempString: string = '';

		for (let i: number = 1; i <= 10; i++) {
			tempString += `${value} * ${i} = ${value * i}\n`;
		}
		return tempString;
	}
}
