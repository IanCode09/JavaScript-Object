// Object Literal
let hero = {
    nama: 'Leomord',
    role: 'Fighter',
    games: 'Mobile Legends'
}

console.log(hero);


//Using Keyword New
let handphone = new Object()
handphone.merk = 'Samsung'
handphone.ram = '4 GB'
handphone.camera = '100 MP'

console.log(handphone['merk']);
console.log(handphone.merk);
console.log(handphone);


// Using Constructor Function
function Laptop(merk, processor, price) {
    this.merk = merk;
    this.processor = processor;
    this.price = price;
}

var ianLaptop = new Laptop('ASUS ROG', 'core i9', '15000000')
var sadukLaptop = new Laptop('DELL', 'dual 2 core', '1500000')

console.log(ianLaptop);
console.log(sadukLaptop);

ianLaptop.color = 'Black'
console.log(ianLaptop.color);
