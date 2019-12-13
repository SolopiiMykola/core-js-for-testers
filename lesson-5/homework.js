// Rewrite function with Class
function createCar(brand, model) {
	let car = {
		// properties
        brand,
        model, // We use the function parameter
		speed: 0,
		// methods:
		accelerate: function(amount) {
			this.speed += amount;
		},

		brake: function(amount) {
			this.speed -= amount;
		},

		status: function() {
			return this.brand + this.model + " running at " + this.speed + " km/h";
		}
	};
	return car;
}

// Now use create a Car object using the class

class Car {
    // Your code
}

let car = new Car("Renault", "Scenic");

console.log(car); // Should return new object

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return car color
car = new CarColor("Renault", "Scenic", "Red");

console.log(car);