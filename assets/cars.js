let cars = [
  {
      brand: "Ford",
      model: "Mustang",
      color: "Mavi"
  },
  {
      brand: "BMW",
      model: "3 Serisi",
      color: "Siyah"
  },
  {
      brand: "Mercedes-Benz",
      model: "E Serisi",
      color: "Kırmızı"
  },
  {
      brand: "Toyota",
      model: "Corolla",
      color: "Beyaz"
  },
  {
      brand: "Honda",
      model: "Civic",
      color: "Gri"
  },
  {
      brand: "Volkswagen",
      model: "Golf",
      color: "Yeşil"
  },
  {
      brand: "Audi",
      model: "A4",
      color: "Turuncu"
  },
  {
      brand: "Porsche",
      model: "911",
      color: "Sarı"
  },
  {
      brand: "Ferrari",
      model: "488 GTB",
      color: "Lacivert"
  },
  {
      brand: "Lamborghini",
      model: "Aventador",
      color: "Altın"
  },
  {
      brand: "Tesla",
      model: "Model S",
      color: "Gümüş"
  },
  {
      brand: "Subaru",
      model: "Impreza",
      color: "Mor"
  },
  {
      brand: "Chevrolet",
      model: "Camaro",
      color: "Turkuaz"
  },
  {
      brand: "Hyundai",
      model: "Tucson",
      color: "Kahverengi"
  },
  {
      brand: "Kia",
      model: "Sportage",
      color: "Pembe"
  },
  {
      brand: "Nissan",
      model: "Altima",
      color: "Beyaz"
  },
  {
      brand: "Jaguar",
      model: "F-Type",
      color: "Siyah"
  },
  {
      brand: "Land Rover",
      model: "Range Rover",
      color: "Gri"
  },
  {
      brand: "Volvo",
      model: "XC90",
      color: "Yeşil"
  },
  {
      brand: "Mazda",
      model: "MX-5",
      color: "Kırmızı"
  }
];

//!for-each ve filtre kullanımı


// kirmizi olanlari filtreleyelim.
let redCars= cars.filter(cars => cars.color == 'Kırmızı');
console.log(redCars);
redCars.forEach( function (element){
document.querySelector('.car-red').innerHTML += `<li> ${element.model} ${element.brand} ${element.color}</li>`
})

// gri cars
let greyCars= cars.filter(cars => cars.color == 'Gri');
console.log(greyCars);
greyCars.forEach(function(element){
  document.querySelector('.car-gri').innerHTML += `<li> ${element.model} ${element.brand} ${element.color}</li>`
})

// black cars

let blackcars = cars.filter(cars=> cars.color == 'Siyah');
console.log(blackcars);
blackcars.forEach(function(element){
document.querySelector('.car-black').innerHTML += `<li> ${element.model} ${element.brand} ${element.color}</li>`
})


// simdi modeli volvo olanları filtreleyelim

let volvoModel = cars.find( cars => cars.brand == 'Volvo');
console.log(volvoModel);

// simdi bmw filtreleyelim

let bmwModel = cars.find( cars => cars.brand == 'BMW');
console.log(bmwModel);

// şimdi mercedesleri bulalım tek var 

let mercedes =  cars.find( cars=> cars.brand == 'Mercedes-Benz');
console.log(mercedes);