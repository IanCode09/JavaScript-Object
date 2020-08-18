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



// JavaScript Object Method
const profil = {
    firstName: 'Ian',
    lastName: 'Lombu',
    npm: 065115344,
    address: 'Bogor',
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}
console.log(profil.fullName())


const perhitungan = {
    angka1: 10,
    angka2: 40,
    hasil: function() {
        return this.angka1 + this.angka2
    }
}
console.log(perhitungan.hasil());