let cars = [];

function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
}
function generateCar(){
        while(true){
                for (let i = 0; i < 3; i++) {
                        let brand = prompt("What's the brand of the car?: ");
                        let model = prompt("What's the model of the car?: ");
                        let year = prompt("What's the year of the car?: ");
                        cars.push(new Car(brand, model, year));
                        console.log(cars);

                        
                }
                if (cars.length == 30) {
                        break;
                } else {
                        continue;
                }
        


        }
}
generateCar()