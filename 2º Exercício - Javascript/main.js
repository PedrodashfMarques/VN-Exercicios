
// ------------------------------------------------- Exercicio 1 -------------------------------------------------

// However, when the number is divisible by 3, do not print the number, but print the word
// 'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
// all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

let number1 = 3;
let number2 = 5;

numerosDivisiveis();


function numerosDivisiveis(){
    for (let index = 1; index <= 100; index++) {

        if((index % number1) == 0 && (index % number2) == 0){
            document.write("Visual Nuts" + " <br> ")
            continue;
        }

        else if((index % number1) === 0){
            document.write("Visual" + " <br> ")

            continue;

        } else if((index % number2) === 0){
            document.write("Nuts" + " <br> ")

            continue;
        }

        document.write(index + " <br > ");

    }

}
document.write("<hr>")


// ------------------------------------------------- Exercicio 2 -------------------------------------------------


// Write a function in javascript that:
// 1 - returns the number of countries in the world
// 2 - finds the country with the most official languages, where they officially speak German(de).
// 3 - that counts all the official languages spoken in the listed countries.
// 4 - to find the country with the highest number of official languages.
// 5 - to find the most common official language(s), of all countries.


let countriesArray = [
    {
    country:"US",
    languages: ["en"]
    },
    {
    country:"BE",
    languages: ["nl","fr","de"]
    },
    {
    country:"NL",
    languages: ["nl"]
    },
    {
    country:"DE",
    languages: ["de"]
    },
    {
    country:"ES",
    languages: ["es"]
    }
];

// 1 - returns the number of countries in the world
let countriesNumber = getNumberOfCountries();

function getNumberOfCountries(){
    return countriesArray.length;
}

document.write("Number of countries is: " + countriesNumber + "<br>");

// 2 - finds the country with the most official languages, where they officially speak German(de).

function findCountryWithGermanLanguages(){
    let countrySpeaksGermanWithMostLanguages = "";
    let counter = 0;

    countriesArray.forEach(element => {

        element.languages.forEach(lingua => {

            if(lingua === "de"){
              
                if(element.languages.length > counter){
                    counter = element.languages.length;
                    countrySpeaksGermanWithMostLanguages = element.country;
                }

            }
        });   
        
    });

    document.write(` Country with most Languages but that speaks German is: ${countrySpeaksGermanWithMostLanguages} <br>`);

}

findCountryWithGermanLanguages();

// 3 - that counts all the official languages spoken in the listed countries.

function countOfficialLanguagesByCountry(){
    let newArray = [];
    document.write("Number of official languages by country: <br>");
    countriesArray.forEach(element => {
        document.write(`${element.country} ${element.languages.length} <br>`);
    });
}
countOfficialLanguagesByCountry();

// 4 - to find the country with the highest number of official languages.

let countryWithMostLanguages = () => {
    let countryWithMostL = "";

    let counter = 0;

    for (let index = 0; index < countriesArray.length; index++) {
        let posicaoDoIndex = countriesArray[index];

        if(posicaoDoIndex.languages.length > counter){

            counter = posicaoDoIndex.languages.length;
            countryWithMostL = posicaoDoIndex.country;
        }
    }

    document.write("Country with the highest number of official languages: " + countryWithMostL + "<br>");
};
countryWithMostLanguages();


// 5 - to find the most common official language(s), of all countries.
function findMostCommonOfficialLanguage(){
    let arrayLinguas = [];

    countriesArray.forEach(element => {
            element.languages.forEach(element => {
                // console.log(element);
                arrayLinguas.push(element);
            });
    });

    let encontrarDuplicados = arrayLinguas.filter((item, index) => arrayLinguas.indexOf(item) !== index);

    // console.log(encontrarDuplicados);

    document.write(`The most common official languages are ${encontrarDuplicados}`)

}

findMostCommonOfficialLanguage();