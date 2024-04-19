///Por solucionar
// const producto1 = {
// 	nombre: "celular",
// 	precio: 100000,
// 	stock: 2,
// };
// producto1.id = "id123";
// producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
// console.log(producto1);

class Product {
	constructor(
		id,
		title,
		price,
		stock,
		images,
		onsale,
		supplier,
		colors,
		description
	) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.stock = stock;
		this.images = images;
		this.onsale = onsale;
		this._supplier = supplier;
		this.colors = colors;
		this.decription = description;
	}

	get getSupplier() {
		return this._supplier;
	}
	set setSupplier(newName) {
		this._supplier = newName;
	}
	sellUnits(units) {
		if (this.stock < units) {
			console.log("no se puede vender");
		} else {
			this.stock = this.stock - units;
		}
	}
}

const prod1 = new Product(2533, "pera", "$1", 1, "imagen1", false, "egg");
const prod2 = new Product(2534, "platano", "$2", 2, "imagen2", true, "egg");
const prod3 = new Product(2535, "manzana", "$3", 3, "imagen3", false, "egg");
const prod4 = new Product(2536, "naranja", "$4", 4, "imagen4", true, "egg");
prod4.getSupplier;
console.log(prod4._supplier);
prod4.setSupplier = "renzo anicama";
console.log(prod4._supplier);

const prod5 = new Product(2537, "coco", "$5", 5, "imagen5", false, "egg");
const prod6 = new Product(
	2538,
	"mandarina",
	"$5",
	13,
	"imagen6",
	true,
	"egg",
	["red", "green", "brown"],
	"aguita de coco"
);
console.log(prod6);
prod5.sellUnits(4);
console.log(prod5.stock);

const products = [prod1, prod2, prod3, prod4];
const longitudProduts = products.length;
console.log(longitudProduts);
const lastElement = products[longitudProduts - 1].title;
console.log(lastElement);
products.unshift(prod5);
products.push(prod6);
products.shift();
products.pop();
console.log(products);
