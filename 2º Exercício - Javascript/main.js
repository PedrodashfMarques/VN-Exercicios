
// Exercicio 1
// However, when the number is divisible by 3, do not print the number, but print the word
// 'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
// all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

let number1 = 3;
let number2 = 5;

numerosDivisiveis();


function numerosDivisiveis(){
    for (let index = 1; index <= 100; index++) {

        if((index % number1) == 0 && (index % number2) == 0){
            console.log("Visual Nuts");
            document.write("Visual Nuts" + " <br> ")
            continue;
        }

        else if((index % number1) === 0){
            // console.log("Visual");
            // outputDiv.textContent += "\n" + "Visual";
            document.write("Visual" + " <br> ")

            continue;

        } else if((index % number2) === 0){
            console.log("Nuts");
            // outputDiv.textContent += "\n" + "Nuts";
            document.write("Nuts" + " <br> ")

            continue;
        }

        document.write(index + " <br > ");

    }

}
document.write("<hr>")


// Exercicio 2

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

