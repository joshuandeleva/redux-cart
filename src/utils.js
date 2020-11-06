export default function formatCurrency(num) {
	return "Ksh" + Number(parseFloat(num).toFixed(1)).toLocaleString() + " ";
}