let cities = [
    {
        city: "Adana",
        famousFor: "Kebap",
        type: "food",
        plateNumber: "01"
    },
    {

        city: "Ankara",
        famousFor: "Simidi",
        type: "food",
        plateNumber: "06"
    },
    {
        city: "İstanbul",
        famousFor: "Boğaz",
        type: "place",
        plateNumber: "34"
    },
    {
        city: "İzmir",
        famousFor: "Boyoz",
        type: "food",
        plateNumber: "35"
    },
    {
        city: "Bursa",
        famousFor: "İskender Kebabı",
        type: "food",
        plateNumber: "16"
    },
    {
        city: "Antalya",
        famousFor: "Düden Şelalesi",
        type: "place",
        plateNumber: "07"
    },
    {
        city: "Gaziantep",
        famousFor: "Baklava",
        type: "food",
        plateNumber: "27"
    },
    {
        city: "Konya",
        famousFor: "Etli Ekmek",
        type: "food",
        plateNumber: "42"
    },
    {
        city: "Trabzon",
        famousFor: "Hamsi",
        type: "food",
        plateNumber: "61"
    },
    {
        city: "Kayseri",
        famousFor: "Mantı",
        type: "food",
        plateNumber: "38"
    },
    {
        city: "Eskişehir",
        famousFor: "Lületaşı",
        type: "place",
        plateNumber: "26"
    },
    {
        city: "Rize",
        famousFor: "Çay",
        type: "food",
        plateNumber: "53"
    },
    {
        city: "Erzurum",
        famousFor: "Cağ Kebabı",
        type: "food",
        plateNumber: "25"
    },
    {
        city: "Diyarbakır",
        famousFor: "Karpuz",
        type: "place",
        plateNumber: "21"
    },
    {
        city: "Mardin",
        famousFor: "Taş Evler",
        type: "place",
        plateNumber: "47"
    },
    {
        city: "Van",
        famousFor: "Van Kedisi",
        type: "place",
        plateNumber: "65"
    },
    {
        city: "Sivas",
        famousFor: "Kangal Köpeği",
        type: "place",
        plateNumber: "58"
    },
    {
        city: "Şanlıurfa",
        famousFor: "Balıklıgöl",
        type: "place",
        plateNumber: "63"
    },
    {
        city: "Mersin",
        famousFor: "Tantuni",
        type: "food",
        plateNumber: "33"
    },
    {
        city: "Muğla",
        famousFor: "Turistik Yerleri",
        type: "place",
        plateNumber: "48"
    },
    {
        city: "Çanakkale",
        famousFor: "Tarihi Gelibolu Yarımadası",
        type: "place",
        plateNumber: "17"
    },
    {
        city: "Hatay",
        famousFor: "Antakya Mozaikleri",
        type: "place",
        plateNumber: "31"
    },
    {
        city: "İzmir",
        famousFor: "Efes Antik Kenti",
        type: "place",
        plateNumber: "35"
    },
    {
        city: "Nevşehir",
        famousFor: "Kapadokya",
        type: "place",
        plateNumber: "50"
    },
    {
        city: "Aydın",
        famousFor: "Milet Antik Kenti",
        type: "place",
        plateNumber: "09"
    }
];

// yemekleri famous
let foodFavs= cities.filter(city => city.type == 'food');
console.log(foodFavs);
foodFavs.forEach(function(element){
document.querySelector('.fav-foods').innerHTML += `<li> ${element.famousFor}</li>`
} )

// tarih famous

let tarihFav= cities.filter(city => city.type== 'place');
console.log(tarihFav);
tarihFav.forEach(function (element){
document.querySelector('.fav-tarih').innerHTML += `<li> ${element.famousFor}</li>`
})

// cift plaklar
let plakas = cities.map(function(element){
    return Number(element.plateNumber)
})
let plakaTwo = plakas.filter(plaka => (plaka % 2) == 0 );
console.log(plakaTwo)
plakaTwo.forEach(function(element){
document.querySelector('.fav-plaka2').innerHTML += `<li> ${element}</li>`
})

// tek plakalar

let plakaTek = plakas.filter(plaka => plaka%2 !== 0);
console.log(plakaTek);
plakaTek.forEach(function(element){
document.querySelector('.fav-plakatek').innerHTML += `<li> ${element}</li>`

})