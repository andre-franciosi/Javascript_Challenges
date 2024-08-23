function isFloat(n) {
    return n % 1 !== 0;
}

function isInt(n) {
     return n % 1 === 0;
}

// --------------------------------------------------------------------------------------

function convertToCelsius() {
    let input = document.getElementById("temperatureInput").value;
    if (input === "") {
        alert("Por favor, insira um valor de temperatura.");
        return;
    }
    let result = 0;
    if (isFloat(input) || isInt(input)) {
        result = (input - 32) / 1.8;
        document.getElementById("vCelsius").innerHTML = result;
    } else {
        alert("Apenas números são permitidos.");
    }
}

function convertToFahrenheit() {
    let input = document.getElementById("temperatureInput").value;
    if (input === "") {
        alert("Por favor, insira um valor de temperatura.");
        return;
    }
    let result = 0;
    if (isFloat(input) || isInt(input)) {
        result = (parseFloat(input) * 1.8) + 32;
        document.getElementById("vFahrenheit").innerHTML = result;
    } else {
        alert("Apenas números são permitidos.");
    }
}

// --------------------------------------------------------------------------------------

function calculateIMC(){
    let inputWeight = document.getElementById("weightInput").value
    let inputHeight = document.getElementById("heightInput").value
    let result = 0
    if (inputWeight === "" || inputHeight === "") {
        alert("Por favor, insira valores");
        return;
    }
    result = 0;
    result = inputWeight / (inputHeight**2);
    let classification = ""
    if(result < 18.5){
        classification = "Baixo Peso"
    } else if (result >= 18.5 && result < 25){
        classification = "Normal"
    } else if (result >= 25 && result < 30){
        classification = "Sobrepeso"
    } else {
        classification = "Obesidade"
    }
    document.getElementById("imcResult").innerHTML = result;
    document.getElementById("imcClassification").innerHTML = classification;
}

// --------------------------------------------------------------------------------------

function concatenation(){
    let inputName = document.getElementById("nameInput").value 
    let inputAge = document.getElementById("ageInput").value
    let inputCity = document.getElementById("cityInput").value
    if (inputName === "" || inputAge === "" || inputCity === "") {
        alert("Por favor, preencha todos os campos");
        return;
    }
    let result = inputName + ", " + inputAge + ", " + inputCity
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function rectangle(){
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    if (firstNumber === "" || secondNumber === "") {
        alert("Por favor, preencha todos os campos")
        return
    }
    let resultArea = firstNumber * secondNumber
    let resultPerimeter = (firstNumber*2) + (secondNumber*2)
    document.getElementById("result").innerHTML = "Área: " + resultArea + "<br>" + "Perímetro: " + resultPerimeter

}

// --------------------------------------------------------------------------------------

function divisibilty(){
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    if (firstNumber === "" || secondNumber === "") {
        alert("Por favor, preencha todos os campos")
        return
    }
    let result = ""
    if (firstNumber % secondNumber === 0) {
        result = firstNumber + " é divisível por " + secondNumber
    } else {
        result = firstNumber + " não é divisível por " + secondNumber
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function ageClassification(){
    let age = document.getElementById("age").value
    if (age === "") {
        alert("Por favor, preencha todos os campos")
        return
    }
    let result = ""
    if(age >= 0 && age <= 12){
        result = "Essa idade é de uma criança"
    } else if (age >= 13 && age <= 17){
        result = "Essa é a idade de um adolescente"
    } else if (age >= 18 && age <= 59) {
        result = "Essa é a idade de um adulto"
    } else {
        result = "Essa é a idade de um idoso"
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function numberComparation(){
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    if (firstNumber === "" || secondNumber === "") {
        alert("Por favor, preencha todos os campos")
        return
    }
    let result = ""
    if (firstNumber > secondNumber) {
        result = "O número " + firstNumber + " é maior que " + secondNumber
    } else if (firstNumber < secondNumber) {
        result = "O número " + firstNumber + " é menor que " + secondNumber
    } else {
        result = "O número " + firstNumber + " é igual a " + secondNumber
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function calculator(id){
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    let result = ""

    if (firstNumber === "" || secondNumber === "") {
        alert("Por favor, preencha todos os campos")
        return
    }

    switch(id){
        case "buttonPlus":
            result = parseInt(firstNumber) + parseInt(secondNumber)
            break
        case "buttonMinus":
            result = firstNumber - secondNumber
            break
        case "buttonMultiply":
            result = firstNumber * secondNumber
            break
        case "buttonDivide":
            result = firstNumber / secondNumber
            break
        
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function fareCalculator(){
    let age = document.getElementById("age").value
    let student = document.querySelector(".checkbox").checked;
    let result = ""

    if(age <= 6){
        result = "Preço da tarifa: 0"
    } else if (age >= 60){
        result = "Preço da tarifa: " + (2.5 - (2.5 * 0.3)) 
    } else {
        if(student){
            result = "Preço da tarifa: " + (2.5 - (2.5 * 0.5))
        } else {
            result = "Preço da tarifa: 2.50"
        }
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function sumTotal(){
    let n = document.getElementById("n").value
    let result = parseInt(0)

    for(let x = 0; x < parseInt(n)+1 ; x++){
        result = parseInt(result) + parseInt(x)
        console.log(result)
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function multiplicationTable(){
    let number = document.getElementById("number").value
    const multiplicationTable = []
    document.getElementById("result").innerHTML = ""


    for(let x = 0; x < 11 ; x++){
        const multiplications = number*x
        multiplicationTable.push(multiplications)
    }

    for(let i = 0; i < multiplicationTable.length; i++){
        result = number + " X " + i + " = " + multiplicationTable[i]
        document.getElementById("result").innerHTML += result + "<br>"
    }
}

// --------------------------------------------------------------------------------------

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

function primeNumber(){
    let number = document.getElementById("number").value
    const numbers = []
    document.getElementById("result").innerHTML = ""
    let result = ""
    
    for(let x = 0; x < number ; x++){
        if(isPrime(x)){
            numbers.push(x)
        }
    }
    for(let i = 0; i < numbers.length; i++){
        result = numbers[i]
        document.getElementById("result").innerHTML += result + ", "
    }
}

// --------------------------------------------------------------------------------------

function asterisks(){
    let number = document.getElementById("number").value
    document.getElementById("result").innerHTML = ""

    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= i; j++){
            document.getElementById("result").innerHTML += "*"
        }
        document.getElementById("result").innerHTML += "<br>"
    }

}

// --------------------------------------------------------------------------------------

function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm
}

function fibonacci_solve(){
    let number = document.getElementById("number").value
    document.getElementById("result").innerHTML = ""
    for(let x = 1; x <= number; x++){
        result = fibonacci(x)
        document.getElementById("result").innerHTML += result + "<br>"
    }

    
} 

// --------------------------------------------------------------------------------------

function evenOrOdd(){
    const number = document.getElementById("number").value
    document.getElementById("result").innerHTML = ""
    if(number % 2 === 0){
        result = "Par"
    } else {
        result = "Ímpar"
    }
    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function factorial(n){
    if(n === 0 || n === 1){
        return 1
    } else {
        return n * factorial(n-1)
    }
}

function factorial_solve(){
    const number = document.getElementById("number").value
    document.getElementById("result").innerHTML = factorial(number)
}

// --------------------------------------------------------------------------------------

function stringReversal(){
    const text = document.getElementById("text").value
    document.getElementById("result").innerHTML = ""

    let reverseArray = text.split("").reverse()
    let joinArray = reverseArray.join("")

    document.getElementById("result").innerHTML = joinArray
}

// --------------------------------------------------------------------------------------

function vowelCount(){
    let text = document.getElementById("text").value
    document.getElementById("result").innerHTML = ""

    const vowels = ['a', 'e', 'i', 'o', 'u']
    let splitText = text.split('')
    let cont = 0
    
    for(let x = 0; x < splitText.length; x++){
        if(vowels.includes(splitText[x])){
            cont = cont + 1
        }
    }
    document.getElementById("result").innerHTML = cont + " vogais"
}

// --------------------------------------------------------------------------------------

function palindrome(){
    let text = document.getElementById("text").value
    document.getElementById("result").innerHTML = ""

    var re = /[^A-Za-z0-9]/g;

    let textLower = text.toLowerCase().replace(re, '')
    let textLowerReversed = textLower.split('').reverse().join().replace(re,'')

    if(textLower === textLowerReversed){
        document.getElementById("result").innerHTML = text + " é um palíndromo"
    } else {
        document.getElementById("result").innerHTML = text + " não é um palíndromo"
    }

}

// --------------------------------------------------------------------------------------

function randomNumberArray(){
    let size = document.getElementById("size").value
    let max = parseInt(document.getElementById("max").value)
    let min = parseInt(document.getElementById("min").value)
    document.getElementById("result").innerHTML = ""

    let array = []

    for(let i = 0; i <= size; i++)
        array.push(Math.floor(Math.random() * (max - min + 1)) + min)

    document.getElementById("result").innerHTML = array
}

// --------------------------------------------------------------------------------------

function mostFrequentElement(){
    let array = document.getElementById("array").value
    let splitArray = array.split(',');
    document.getElementById("result").innerHTML = ""

    let object = {}

    for(let i = 0; i <= splitArray.length; i++){
        if (object[splitArray[i]]) {
            object[splitArray[i]] += 1
          } else {
            object[splitArray[i]] = 1
          } 
    }

    let biggestValue = -1
    let biggestValuesKey = -1

    Object.keys(object).forEach(key => {
        let value = object[key]
        if (value > biggestValue) {
            biggestValue = value
            biggestValuesKey = key
        }
    })

    document.getElementById("result").innerHTML = biggestValuesKey + " repetido " + biggestValue + " vezes"

}

// --------------------------------------------------------------------------------------

function removeRepeatedElements(){
    let array = document.getElementById("array").value
    let splitArray = array.split(',');
    document.getElementById("result").innerHTML = ""

    let object = {}
    let newArray = []

    for(let i = 0; i <= splitArray.length; i++){
        object[splitArray[i]] = 1
        console.log(object)
    }
    Object.keys(object).forEach(key => {
        newArray.push(key)
    })
    newArray.pop()
    
    document.getElementById("result").innerHTML = newArray
}

// --------------------------------------------------------------------------------------

function arrayConcatenation(){
    let array = document.getElementById("array").value
    let array2 = document.getElementById("array2").value
    let splitArray = array.split(',')
    let splitArray2 = array2.split(',')
    document.getElementById("result").innerHTML = ""

    let newArray = []

    for(let i = 0; i <= splitArray.length; i++){
        newArray.push(splitArray[i])
    }
    newArray.pop()
    for(let x = 0; x <= splitArray2.length; x++){
        newArray.push(splitArray2[x])
    }
    newArray.pop()

    document.getElementById("result").innerHTML = newArray
}

// --------------------------------------------------------------------------------------

function intersectionArray(){
    let array = (document.getElementById("array").value).split(',')
    let array2 = (document.getElementById("array2").value).split(',')
    document.getElementById("result").innerHTML = ""

    let intersectionArray = []

    for(let i = 0; i <= array.length; i++){
        if(array2.includes(array[i])){
            intersectionArray.push(array[i])
        }
    }

    document.getElementById("result").innerHTML = intersectionArray
}

// --------------------------------------------------------------------------------------

function averageOfArray(){
    let array = (document.getElementById("array").value).split(',')
    document.getElementById("result").innerHTML = ""

    let sum = 0

    for(let i = 0; i <= array.length-1; i++){
        sum += parseInt(array[i])
    }
    
    document.getElementById("result").innerHTML = parseFloat(sum/array.length)
}

// --------------------------------------------------------------------------------------

function propertiesFilter(){
    let array = (document.getElementById("array").value).split(',')
    document.getElementById("result").innerHTML = ""
    let result = []

    const object = {
        nome: "André Franciosi",
        idade: "21",
        formação: "Engenharia de Computação",
        altura: "181",
        github: "andre_franciosi"    
    }

    for(let i = 0; i <= array.length; i++){
        if(object.hasOwnProperty(array[i])){
            result.push(object[array[i]])
        }
    }

    document.getElementById("result").innerHTML = result
}

// --------------------------------------------------------------------------------------

function joiningObjects(){
    document.getElementById("result").innerHTML = ""

    const object = {
        nome: "Rhoda Rhodes",
        idade: "32",
        email: "nipuedi@rawi.mo", 
    }
    const object2 = {
        altura: "181",
        pais: "Portugal"    
    }
    let combinedObjects = {...object, ...object2}

    document.getElementById("result").innerHTML = Object.values(combinedObjects)
}

// --------------------------------------------------------------------------------------

function addingElements(){
    let text = document.getElementById('text').value
    const newItem = document.createElement('li')
    newItem.innerText = text
    
    document.getElementById('list').appendChild(newItem).setAttribute('id', 'p1')
}

function removingElements(){
    document.getElementById('p1').remove()
}

// --------------------------------------------------------------------------------------

function filter(){
    let filter = document.getElementById('filter').value

    const originalArray = Array.from(document.getElementById('list').children)

    const list = [...originalArray];
    const filteredList = document.createDocumentFragment()

    list.forEach(value => {
        const itemInList = value.innerText.toLowerCase()
        const keyword = filter.toLowerCase()
        if(itemInList.includes(keyword)){
            filteredList.appendChild(value)
        }
    });

    document.getElementById('list').replaceChildren(filteredList)
}

// --------------------------------------------------------------------------------------

function moveItens(id){
    let selection = document.getElementById('filter').value.toString().toLowerCase()
    const array = ['gato', 'cachorro', 'rato', 'cavalo', 'coelho']
    let list = document.querySelector("ul")

    switch (id){
        case "select":
            console.log("SELECT")
            document.getElementById('p'+array.indexOf(selection)).className = 'changeClass'
            break
        case "up":
            console.log("UP")
            document.getElementById('p'+array.indexOf(selection)).style.
            break
        case "down":
            console.log("DOWN")
            break
        case "deselect":
            console.log("DESELECT")
            document.getElementById('p'+array.indexOf(selection)).className = ''
            break
    }
}