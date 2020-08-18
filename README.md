# Aynchronous-Function
JavaScript Course

Creating Java Script Object

1. Define and create single object, using an object literal


2. Define and create single object, with the keyword new

3. Using Contructor Function



How to Make method in object


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