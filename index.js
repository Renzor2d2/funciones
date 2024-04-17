// let totalApagar = 0;

// const numProducts = Number(prompt("¿Cuántas productos desea llevar?"));

// for (let i = 1; i <= numProducts; i++) {
// 	const nombre = prompt("¿Qué producto desea llevar?");
// 	const cantidad = Number(prompt("¿Cuántas productos desea llevar?"));
// 	const precio = Number(prompt("¿Cuánto sale cada unidad?"));
// 	const subtotal = cantidad * precio;
// 	totalApagar += subtotal;
// 	console.log();
// }
// console.log(totalApagar);
const comprar = () => {
	let totalApagar = 0;
	const numProducts = Number(prompt("¿Cuántas productos desea llevar?"));
	for (let index = 1; index <= numProducts; index++) {
		const nombre = prompt("¿Qué producto desea llevar?");
		const cantidad = Number(prompt("¿Cuántas unidades?"));
		const precio = Number(prompt("¿Cuánto sale cada unidad?"));
		const subtotal = cantidad * precio;
		totalApagar = totalApagar + subtotal;
	}
	// console.log(totalApagar);
	return totalApagar;
};

const total1 = comprar();
console.log(total1);
const total2 = comprar(); //7
console.log(total2);
const total3 = comprar(); //12
console.log(total3);
const total = total1 + total2 + total3;

console.log(total);
